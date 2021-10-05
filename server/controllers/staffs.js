import { StaffModel } from "../models/staffsModel.js";

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
  try {
    const createpost = new StaffModel(post);
    const response = await createpost.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const staffId = await StaffModel.findById(id);
    res.status(200).json(staffId);
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

export { getStaff, createAccount, getById, deleteById, updateById };
