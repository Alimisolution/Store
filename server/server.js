import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";

import productRoutes from "./Routes/productRoute.js";
import userRoutes from "./Routes/userRoute.js";
import { errorHandler, notFound } from "./MiddleWare/errorHandler.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("App successfully connected to the database"))
  .catch((err) => console.log("Error", err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

app.get("/", (req, res) => {
  res.send("App on runing from the server side");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
// app.use("/api/orders");
// app.use("/api/upload");

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`App run on port ${PORT}`));
