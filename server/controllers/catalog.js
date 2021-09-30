import { CatalogModel } from "../models/catalogModel.js";

const getCatalog = async (req, res) => {
  try {
    const catalog = await CatalogModel.find();
    console.log("catalog:", catalog);
    res.status(200).json(catalog);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const createCatalog = (req, res) => {
  res.send("Create catalog successfuly");
};

export { getCatalog, createCatalog };
