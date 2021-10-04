import { OrderModel } from "../models/orderModel.js";

const getOrder = async (req, res) => {
  try {
    const Order = await OrderModel.find();
    res.status(200).json(Order);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const createOrder = async (req, res) => {
  const create = req.body;
  try {
    const post = new OrderModel(create);
    const response = await post.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const getOrderById = async (req, res) => {
  const id = req.params.id;
  try {
    const OrderId = await OrderModel.findById(id);
    res.status(200).json(OrderId);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const deleteOrderById = async (req, res) => {
  const id = req.params.id;
  try {
    const OrderId = await OrderModel.findByIdAndRemove(id);
    res.status(200).json(OrderId);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateOrderById = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const OrderId = await OrderModel.findByIdAndUpdate(id, updates);
    res.status(200).json(OrderId);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

export { getOrder, createOrder, getOrderById, deleteOrderById, updateOrderById };