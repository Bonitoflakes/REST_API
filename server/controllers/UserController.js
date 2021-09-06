import { userModel } from "./../Models/userModel.js";

// @desc Get all users from the db
// @method : GET
const getAllUsers = async (req, res) => {
  try {
    // 1) Filtering
    const queryObj = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);

    // 2)  Advanced Filtering
    let queryString = JSON.stringify(queryObj);
    let queryStr = await queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );
    const allUsers = await userModel.find(JSON.parse(queryStr));

    res.status(200).json({
      status: "success",
      results: allUsers.length,
      data: {
        allUsers,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "failed",
      error: error,
    });
  }
};

// @desc Get a particular user from the db
// @method : GET

const getUser = async (req, res) => {
  try {
    const singleUser = await userModel.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        singleUser,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "failed",
      error: error,
    });
  }
};

// @desc Add a user to the db
// @method : POST
const addUser = async (req, res) => {
  console.log(req.body);
  try {
    const newUser = await userModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newUser,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "failed",
      error: error,
    });
  }
};

// @desc Update user details to the db
const updateUser = async (req, res) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        updatedUser,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "failed",
      error: error,
    });
  }
};

// @desc Delete user from the db
const deleteUser = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: "Deleted Successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "failed",
      error: error,
    });
  }
};

export { getAllUsers, getUser, addUser, updateUser, deleteUser };
