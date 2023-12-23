import User from "../Models/userModel.js";
import asyncHandler from "../MiddleWare/asyncHanler.js";
import generateToken from "../utils/generateToken.js";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.comparePassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("Invalid email or pasword");
  }
});

const RegisterUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.status(400).json({ message: "User Already exist" });
  }
  const regUser = await User.create({
    name,
    email,
    password,
  });
  generateToken(res, regUser._id);
  res.status(201).json({
    _id: regUser._id,
    name: regUser.name,
    email: regUser.email,
    isAdmin: regUser.isAdmin,
  });
};

const LogoutUser = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out succesfully" });
};

const updateUserProfile = async (req, res) => {
  const user = await User.findOne(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }
    const updateuser = await user.save();
    res.status(200).json({
      _id: updateuser._id,
      name: updateuser.name,
      email: updateuser.email,
      isAdmin: updateuser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

const getUserProfile = async (req, res) => {
  const user = await User.findOne(req.user._id);
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

const adminUpdateUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.isAdmin = Boolean(req.body.isAdmin);
    const updateUser = await user.save();
    res.status(200).json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

const deleteUserById = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (user) {
    res.status(204).json({ message: "User delete successfully" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};
const getAllUsers = async (req, res) => {
  const user = await User.find({});
  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
};

export {
  authUser,
  LogoutUser,
  RegisterUser,
  updateUserProfile,
  adminUpdateUserById,
  deleteUserById,
  getUserProfile,
  getAllUsers,
};
