import { userModel } from "./userModels.js";
import { promisify } from "util";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";
import { Types } from "mongoose";

// Generate JWT for Authentication
export const jwtSignature = (id) => {
	let token = jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRY,
	});
	return token;
};

export const loginUser = async (req, res, next) => {
	const { email, password } = req.body;

	// console.log(email, password);

	// 1) Check if email and password exist
	if (!email || !password) {
		res.status(401).json({
			status: "Fail!",
			message: "Provide email and Password!",
		});
		next();
	}

	// 2) Check if user exists and password correct
	let query = { email: `${email}` };
	const user = await userModel.findOne(query).select("+password");

	if (!user || !(await user.correctPassword(password, user.password))) {
		res.status(401).json({
			status: "Fail!",
			message: "Incorrect Password or email",
		});
		next();
	}

	// 3) If everything is ok, send token to client

	const token = jwtSignature(user._id);
	res.status(200).json({
		status: "OK",
		token,
		user,
	});
	next();
};

// protect Routes

export const protect = async (req, res, next) => {
	let token;
	// Get the token and check existance
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		token = req.headers.authorization.split(" ")[1];
	}

	if (!token) {
		res.status(401).json({
			status: "Fail!",
			error: "Authorization Error. Login to get access! ",
		});
		return;
	}
	// Verification of the token/Validate
	let decodedSignature;
	try {
		decodedSignature = await promisify(jwt.verify)(
			token,
			process.env.JWT_SECRET,
		);
	} catch (error) {
		res.status(401).json({
			status: "Fail!",
			error: "Authorization Error. Login to get access! ",
		});
		return;
	}

	// Check if user exists
	const query = {
		_id: Types.ObjectId(decodedSignature.id),
	};
	const currentUser = await userModel.findOne(query);
	if (!currentUser) {
		res.status(401).json({
			status: "Fail!",
			error: "User not found |  Authorization Error. Login to get access! ",
		});
		return;
	}
	// check if user changed password after jwt was issued
	if (currentUser.changedPasswordAfterJWT(decodedSignature.iat)) {
		res.status(401).json({
			status: "Fail!",
			error: "Recently changed password! Login again! ",
		});
		return;
	}

	// Grant access to protected Route.
	req.user = currentUser;
	next();
};
