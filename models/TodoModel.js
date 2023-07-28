const {mongoose} = require("../services/db");

const TodoSchema = new mongoose.Schema({
    text: {type: String, required: true},
    complete: {type: Boolean, default: false}
});

const TodoM = mongoose.model("todo", TodoSchema);

class TodoModel{
    static createTodo = async (data)=>{
        return await TodoM.create(data);
    } 
    static getTodos = async ()=>{
        return await TodoM.find();
    } 
    static deleteTodo = async (id)=>{
        return await TodoM.findByIdAndDelete(id);
    }
    static updateTodo = async (id, data)=>{
        return await TodoM.findByIdAndUpdate(id, data);
    }
}

module.exports = TodoModel;