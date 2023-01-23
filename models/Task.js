const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true
    },
//Se a tarefa esta sendo feita
check: {
    type: Boolean,
    require: true,
},
date: {
type: Date,
default: Date.now(),
},

});

module.exports = mongoose.model("Task", taskSchema);