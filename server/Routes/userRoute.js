import express from "express";

import { protect, admin } from "../MiddleWare/protectMiddleWare.js";

import {
  authUser,
  RegisterUser,
  LogoutUser,
  getUserProfile,
  getAllUsers,
  updateUserProfile,
  adminUpdateUserById,
  deleteUserById,
} from "../Controllers/userController.js";

const router = express.Router();

router.get("/", protect, admin, getAllUsers);
router.post("/auth", authUser);
router.post("/logout", LogoutUser);
router.post("/register", RegisterUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .patch(protect, updateUserProfile);
router
  .route("/:id")
  .patch(protect, admin, adminUpdateUserById)
  .delete(protect, admin, deleteUserById);
export default router;
