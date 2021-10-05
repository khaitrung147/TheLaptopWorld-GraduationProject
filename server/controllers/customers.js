import { CustomersModel } from "../models/customersModel.js";

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
  try {
    const createpost = new CustomersModel(post);
    const response = await createpost.save();
    res.status(200).json(response);
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

export { getCustomers, createAccount, getById, deleteById, updateById };
