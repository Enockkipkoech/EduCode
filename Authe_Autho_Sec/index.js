// import { connectMongoDB } from "./MongoDB/dbConnection";
import express from "express";
import { userController, getAllUsers } from "./Users/userController.js";
import { loginUser } from "./Users/authController.js";
import { protect } from "./Users/authController.js";
const app = express();

import "./MongoDB/dbConnection.js";

import cors from "cors";
app.use(express.json());
app.use(
	cors({
		origin: "*",
	}),
);

const main = async () => {
	console.log("\n🔥🔥 [START:] ****AUTH APP**** 🔥🔥 ");

	// ROUTES/Restfu-APIs

	// root Route
	app.get("/", (req, res) => {
		let msg = `Authentication, Authorization and Security`;

		res.send({
			success: `Alright! 200 `,
			data: msg,
		});
	});

	// Req Headers
	app.use((req, res, next) => {
		// console.log(req.headers); 
		next();
	});

	//Register User
	app.post("/register", userController);

	// Login user
	app.post("/login", loginUser);
	app.get("/allUsers", protect, getAllUsers);

	const PORT = 3000;
	app.listen(PORT, () => {
		console.log(
			`\n🤝 🤝 [BACKEND SERVER:]  Listening on port: http://127.0.0.1:${PORT}/ 🤝 🤝 `,
		);
	});
};

main();
