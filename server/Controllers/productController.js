import Product from "../Models/productsModel.js";
import asyncHandler from "../MiddleWare/asyncHanler.js";

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
  console.log(product);
});

const getProductByID = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  console.log(product);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { getAllProducts, getProductByID };
