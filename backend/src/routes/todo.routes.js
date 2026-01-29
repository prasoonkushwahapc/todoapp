const express = require("express")
const { createTodo, getAllTodos } = require("../controllers/todo.controller")

const router = express.Router()

router.post("/", createTodo)
router.get("/", getAllTodos)

module.exports = router