import { CustomersModel } from "../models/customersModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const getCustomers = async (req, res) => {
  try {
    const post = await CustomersModel.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const createAccount = async (req, res) => {
  const post = req.body;
  const Username = req.body.Username;
  try {
    await CustomersModel.findOne({
      Username: Username,
    }).then((data) => {
      if (data) {
        res.status(200).json("Username da ton tai");
      } else {
        const createpost = new CustomersModel(post);
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
    const customerId = await CustomersModel.findById(id);
    res.status(200).json(customerId);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await CustomersModel.findByIdAndRemove(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateById = async (req, res) => {
  const id = req.params.id;
  try {
    const updates = req.body;
    const post = await CustomersModel.findByIdAndUpdate(id, updates);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const login = async (req, res) => {
  const username = req.body.Username;
  const password = req.body.Password;
  try {
    const user = await CustomersModel.findOne({
      Username: username,
    });
    if (!user) {
      res.status(200).json("Tai khoan không ton tai");
    }
    if (bcrypt.compareSync(password, user.Password)) {
      const loginToken = jwt.sign({ userId: user._id }, "myKey");
      return res.status(200).json({
        status: "success",
        token: {
          useName: username,
          loginToken,
        },
      });
    } else {
      res.status(200).json("mat khau sai");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: err });
  }
};

export { getCustomers, createAccount, getById, deleteById, updateById, login };
