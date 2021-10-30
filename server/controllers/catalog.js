import { CatalogModel } from "../models/catalogModel.js";

const getCatalog = async (req, res) => {
  try {
    const catalog = await CatalogModel.find();
    res.status(200).json(catalog);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const createCatalog = async (req, res) => {
  const post = req.body;
  try {
    const createpost = new CatalogModel(post);
    const response = await createpost.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const catalogId = await CatalogModel.findById(id);
    res.status(200).json(catalogId);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await CatalogModel.findByIdAndRemove(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateById = async (req, res) => {
  const id = req.params.id;
  try {
    const updates = req.body;
    const post = await CatalogModel.findByIdAndUpdate(id, updates);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

export { getCatalog, createCatalog, getById, deleteById, updateById };
