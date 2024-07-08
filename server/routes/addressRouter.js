const express = require("express");
const {
  addAddress,
  getAllAddressByUser,
  editAddress,
  deleteAddress,
  getPrimaryAddress,
  updatePrimaryAddress,
} = require("../controller/addressController");
const validateJwtToken = require("../middleware/authMiddleware");

const addressRouter = express.Router();

addressRouter.post("/addAddress", validateJwtToken, addAddress);
addressRouter.post(
  "/getAllAddressByUser",
  validateJwtToken,
  getAllAddressByUser
);

addressRouter.post("/editAddress", validateJwtToken, editAddress);
addressRouter.post("/deleteAddress", validateJwtToken, deleteAddress);
addressRouter.post("/getPrimaryAddress", validateJwtToken, getPrimaryAddress);
addressRouter.post(
  "/updatePrimaryAddress",
  validateJwtToken,
  updatePrimaryAddress
);

module.exports = addressRouter;
