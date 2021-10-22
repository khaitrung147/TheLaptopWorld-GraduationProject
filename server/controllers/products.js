import { ProductsModel } from "../models/productsModel.js";

const getProducts = async (req, res) => {
  try {
    const products = await ProductsModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const createProduct = async (req, res) => {
  const create = req.body;
  try {
    const post = new ProductsModel(create);
    const response = await post.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const getById = async (req, res) => {
  const key = req.params.id;
  try {
    const productId = await ProductsModel.findOne({ Key: key });
    res.status(200).json(productId);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  try {
    const productId = await ProductsModel.findByIdAndRemove(id);
    res.status(200).json(productId);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateById = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const productId = await ProductsModel.findByIdAndUpdate(id, updates);
    res.status(200).json(productId);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

export { getProducts, createProduct, getById, deleteById, updateById };
