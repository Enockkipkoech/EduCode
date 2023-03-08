import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const { model, Schema } = mongoose;
mongoose.set("strictQuery", false);

// Create Schema

const userSchema = new Schema({
	name: { type: String, required: [true, "Please input your name"] },
	email: {
		type: String,
		required: [true, "Provide your email"],
		unique: true,
		lowercase: true,
		valdate: [validator.isEmail, "Provide a valid email!"],
	},
	phoneNo: { type: String, required: true },
	photo: { type: String, default: "null" },
	password: {
		type: String,
		required: [true, "Provide Password!"],
		select: false,
		minlength: 8,
	},
	passwordConfirm: {
		type: String,
		required: [true, "Confirm your Password!"],
		minlength: 8,
		validate: {
			// This works on CTREATE & SAVE only
			validator: function (el) {
				return el === this.password;
			},
		},
		message: "Passwords are NOT the same!",
	},
	passwordChangedAt: { type: Date, default: new Date() },
	createdAt: { type: Date, required: true, default: new Date() },
	updatedAt: { type: Date, required: true, default: new Date() },
});

// Middlewares -Pre-save
userSchema.pre("save", async function (next) {
	// Execute this function if password is modified
	if (!this.isModified("password")) return next();

	//Bcrypt/ hash the password with a cost of 12
	this.password = await bcrypt.hash(this.password, 12);

	//Delete password confirm
	this.passwordConfirm = undefined;
	next();
});

// Instance Method to Verify Token
userSchema.methods.correctPassword = async function (
	candidatePassword,
	userPassword,
) {
	return await bcrypt.compare(candidatePassword, userPassword);
};

// Change password checker

userSchema.methods.changedPasswordAfterJWT = function (JWTTimestamp) {
	if (this.passwordChangedAt) {
		const changedTimestamp = parseInt(
			this.passwordChangedAt.getTime() / 1000,
			10,
		);
		console.log(changedTimestamp, JWTTimestamp);
		return JWTTimestamp < changedTimestamp;
	}
	return false; // means NOT CHANGED!
};

// Create Model

const userModel = model("users", userSchema, "users");

export { userModel };
