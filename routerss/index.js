const express = require("express");

const {createUser, getAllUsers, getOneUser, deleteUser, updateUser} =require("../controllers/index")
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);
router.post("/", createUser);
module.exports = router;
