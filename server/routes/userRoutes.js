import express from "express";
import {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
  getUser,
} from "../controllers/UserController.js";

const router = express.Router();

// express.static , router.param('id',function)

router.route("/").get(getAllUsers).post(addUser);

router.route("/:id").put(updateUser).delete(deleteUser).get(getUser);

export default router;
