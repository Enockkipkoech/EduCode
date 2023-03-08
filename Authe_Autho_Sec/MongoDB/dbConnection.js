import mongoose from "mongoose";
import "dotenv/config";

const connectMongoDB = async () => {
	try {
		// Connection string MONGODB_URI from .env
		if (!process.env.MONGODB_URI) {
			throw new Error("❗Database Connection String Undefined!");
		}

		await mongoose.connect(process.env.MONGODB_URI, {
			keepAlive: true,
			connectTimeoutMS: 60000,
			socketTimeoutMS: 60000,
		});
		let message = "\n🤝 🤝 ****MongoDB Connection Successful**** 🤝 🤝 ";
		console.log(message);
	} catch (error) {
		let message = `❗Error connecting to database: ${error}`;
		console.log(message);
	}
};
connectMongoDB();

export { connectMongoDB };
