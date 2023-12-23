import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/user.js";
import products from "./data/products.js";
import User from "./Models/userModel.js";
import Product from "./Models/productsModel.js";
import Order from "./Models/OrderModel.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("App successfully connected to the database"))
  .catch((err) => console.log("Error", err));

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
