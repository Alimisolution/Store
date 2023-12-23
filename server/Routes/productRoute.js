import express from "express";
const router = express.Router();
import {
  getAllProducts,
  getProductByID,
} from "../Controllers/productController.js";

router.route("/").get(getAllProducts);
router.route("/:id").get(getProductByID);
export default router;
