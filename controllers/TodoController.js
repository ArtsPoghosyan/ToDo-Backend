const TodoModel = require("../models/TodoModel");

class TodoController {
    static getTodos = async (req, res, next)=>{
        try{
            const todos = await TodoModel.getTodos();
            return res.render('index', {title: "Home Page", todos, message: false,  errorMessage: false});
        }catch(err){
            return res.render('error', {title: "Error Page", error: err});
        }
    } 
    static createTodoPost = async (req, res, next)=>{
        try{
            const {text} = req.body;
            if(text){
                await TodoModel.createTodo({text});
                const todos = await TodoModel.getTodos();
                return res.render('index', {message: "todo succesfully created", todos, title: "Home Page", errorMessage: false});
            }
    
        }catch(err){
            return res.render('error', {title: "Error Page", error: err});
        }
    } 
    static deleteTodoPost = async (req, res, next)=>{
        try{
            const {id} = req.body;

            if(id){
                const todo = await TodoModel.deleteTodo(id);
                if(todo){
                    const todos = await TodoModel.getTodos();
                    return res.render('index', {title: "Home Page", message: "deleted succesfully", todos, errorMessage: false});
                }
                return res.render('index', {title: "Home Page", message: false, errorMessage: "not found todo"});
            }

            return res.render('index', {title: "Home Page", message: false, errorMessage: "type ID"});
        }catch(err){
            return res.render('error', {title: "Error Page", error: err});
        }
    }
    static updateCompletePost = async (req, res, next)=>{
        try{
            const {id} = req.body;
            if(id){
                const todo = await TodoModel.updateTodo(id, {complete: true});
                if(todo){
                    const todos = await TodoModel.getTodos();
                    return res.render('index', {title: "Home Page", message: "updated succesfully", todos, errorMessage: false});
                }
                return res.render('index', {title: "Home Page", message: false, errorMessage: "not found todo"});
            }

            return res.render('index', {title: "Home Page", message: false, errorMessage: "type ID"});
        }catch(err){
            return res.render('error', {title: "Error Page", error: err});
        }
    }
}

module.exports = TodoController;