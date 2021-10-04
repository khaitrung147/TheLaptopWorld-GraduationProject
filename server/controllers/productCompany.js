import { ProductCompanyModel } from "../models/productCompanyModel.js";

const getProductCompany = async (req, res) => {
  try {
    const products = await ProductCompanyModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const createProductCompany = async (req, res) => {
  const create = req.body;
  try {
    const post = new ProductCompanyModel(create);
    const response = await post.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const productId = await ProductCompanyModel.findById(id);
    res.status(200).json(productId);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  try {
    const productId = await ProductCompanyModel.findByIdAndRemove(id);
    res.status(200).json(productId);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateById = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const productId = await ProductCompanyModel.findByIdAndUpdate(id, updates);
    res.status(200).json(productId);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

export { getProductCompany, createProductCompany, getById, deleteById, updateById };