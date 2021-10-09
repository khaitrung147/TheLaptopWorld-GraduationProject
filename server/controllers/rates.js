import { Rates } from "../models/ratesModel.js";

const getRates= async (req, res) => {
  try {
    const Rates = await Rates.find();
    res.status(200).json(Rates);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const createRates = async (req, res) => {
  const create = req.body;
  try {
    const post = new Rates(create);
    const response = await post.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const RatesId = await Rates.findById(id);
    res.status(200).json(RatesId);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateById = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const RatesId = await Rates.findByIdAndUpdate(id, updates);
    res.status(200).json(RatesId);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

export { getRates, createRates, getById, updateById };