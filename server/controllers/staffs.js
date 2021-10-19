import { StaffModel } from "../models/staffsModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const getStaff = async (req, res) => {
  try {
    const post = await StaffModel.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const createAccount = async (req, res) => {
  const post = req.body;
  const username = req.body.Username;
  try {
    await StaffModel.findOne({
      Username: username,
    }).then((data) => {
      if (data) {
        res.status(200).json("Username da ton tai");
      } else {
        const createpost = new StaffModel(post);
        const response = createpost.save();
        return res.status(200).json(response);
      }
    });
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const customerId = await StaffModel.findById(id);
    res.status(200).json(customerId);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await StaffModel.findByIdAndRemove(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateById = async (req, res) => {
  const id = req.params.id;
  try {
    const updates = req.body;
    const post = await StaffModel.findByIdAndUpdate(id, updates);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const login = async (req, res) => {
  const username = req.body.Username;
  const password = req.body.Password;
  try {
    const user = await StaffModel.findOne({
      Username: username,
    });
    if (!user) {
      return res.status(200).json("Tai khoan không ton tai");
    } else {
      if (bcrypt.compareSync(password, user.Password)) {
        const loginToken = jwt.sign({ userId: user._id }, "myKey");
        return res.status(200).json({
          status: "success",
          token: {
            useName: username,
            role: user.PhanQuyen,
            loginToken,
          },
        });
      } else {
        return res.status(200).json("mat khau sai");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: err });
  }
};

export { getStaff, createAccount, getById, deleteById, updateById, login };
