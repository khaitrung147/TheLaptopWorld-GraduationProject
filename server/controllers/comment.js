import { comment } from "../models/commentModel.js";

const getComment = async (req, res) => {
  try {
    const  comment = await comment.find();
    res.status(200).json( comment);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const createComment = async (req, res) => {
  const create = req.body;
  try {
    const post = new comment(create);
    const response = await post.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const  commentId = await commentId.findById(id);
    res.status(200).json( commentId);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  try {
    const  commentId = await commentId.findByIdAndRemove(id);
    res.status(200).json( commentId);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const updateById = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const  commentId = await commentId.findByIdAndUpdate(id, updates);
    res.status(200).json( commentId);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

export { getComment, createComment, getById, deleteById, updateById };