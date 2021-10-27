import { commentModel } from "../models/commentModel.js";

const getComment = async (req, res) => {
  try {
    const comment = await commentModel.find().sort({ createdAt: "desc" });
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const createComment = async (req, res) => {
  const create = req.body;
  try {
    const post = new commentModel(create);
    const response = await post.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const commentId = await commentModel
      .find({ MaSanPham: id })
      .sort({ createdAt: "desc" });
    res.status(200).json(commentId);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  try {
    const commentId = await commentModel.findByIdAndRemove(id);
    res.status(200).json(commentId);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateById = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const commentId = await commentModel.findByIdAndUpdate(id, updates);
    res.status(200).json(commentId);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: err });
  }
};

export { getComment, createComment, getById, deleteById, updateById };
