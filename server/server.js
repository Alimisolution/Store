import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.NODE_ENV || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("App on runing from the server side");
});

app.listen(PORT, console.log(`App run on port ${PORT}`));
