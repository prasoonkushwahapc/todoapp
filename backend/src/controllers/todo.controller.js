const Todo = require("../models/todo.model");

exports.createTodo = async (req, res) => {
  try {
    const { title, desc } = req.body;
    if (!title || !desc) {
      return res.status(404).json({
        message: "All inputs required",
        success: false,
      });
    }
    const newTodo = await Todo.create({
      title,
      desc,
    });
    res.status(201).json({
      data: newTodo,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      success: false,
    });
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    if (!todos) {
      return res.status(404).json({
        message: "Todos not found",
        success: false,
      });
    }
    res.status(200).json({
      data: todos,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
      success: false,
    });
  }
};
