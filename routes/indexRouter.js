const express = require("express");
const router = express.Router();
const TodoController = require("../controllers/TodoController");

router.get("/", TodoController.getTodos);

router.post("/create", TodoController.createTodoPost);
router.post("/update-complete", TodoController.updateCompletePost);
router.post("/delete", TodoController.deleteTodoPost);

module.exports = router;