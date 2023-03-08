import { userModel } from "../Users/userModels.js";
import jwt from "jsonwebtoken";

// Register User Controller
const userController = (req, res) => {
	let name = req.body.name;
	let email = req.body.email;
	let phoneNo = req.body.phoneNo;
	let photo = req.body.photo;
	let password = req.body.password;
	let passwordConfirm = req.body.passwordConfirm;
	try {
		const userDetails = {
			name,
			email,
			phoneNo,
			photo,
			password,
			passwordConfirm,
		};
		const newUser = userModel.create(userDetails, (err, doc) => {
			if (err) {
				return res.json({ "Error saving user in DB": err });
			}

			// Generate JWT for Authentication
			const jwtSignature = jwt.sign({ id: doc._id }, process.env.JWT_SECRET, {
				expiresIn: process.env.JWT_EXPIRY,
			});

			let details = `Registered User Successfully \n Details: ${doc} \n USER_ID: ${doc._id}\n JWT: ${jwtSignature}`;
			console.log(`Saved User!: ${details}`);

			return res.json({
				status: "OK",
				user: { doc },
				JWTSignature: jwtSignature,
			});
		});
	} catch (error) {
		console.log(`Error registering User `, error);
	}
};

// Get All Users
const getAllUsers = async (req, res) => {
	const AllUsers = await userModel.find({});

	res.status(200).json({
		status: "OK",
		results: AllUsers.length,
		AllUsers,
	});
};

// Get User

const getUser = async (req, res) => {
	const { email } = req.body;

	let query = { email: `${email}` };
	const user = await userModel.findOne(query).select("+password");

	res.status(200).json({
		status: "OK",
		results: user.length,
		user,
	});
};

export { userController, getAllUsers, getUser };
