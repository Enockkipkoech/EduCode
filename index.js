import express from "express";
import cors from "cors";
const app = express();

// Middlewares
import { authPage, authCourse } from "./middlewares.js";

app.use(express.json());

app.use(cors());

const main = async () => {
	app.get("/", (req, res) => {
		res.json({
			status: "success",
			masg: " User Authorization and User Roles. Welcome to the API Test Page.",
		});
	});

	app.get("/api/course/grades", authPage(["teacher", "admin"]), (req, res) => {
		res.json({
			status: "success",
			Enock: 100,
			Kofi: 90,
			Kwame: 80,
			Kweku: 70,
			Kofi: 60,
			Kweku: 50,
			BlackDime: 40,
		});
	});

	app.get("/api/course/:id", authCourse, (req, res) => {
		const { id } = req.params;

		console.log(id);
		res.json({
			status: "success",
			msg: `You have Permision to access Course ${id}`,
		});
	});

	// Server Port
	const PORT = process.env.PORT || 3000;

	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
};
main();
