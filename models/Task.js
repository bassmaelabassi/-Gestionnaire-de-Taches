const mongoose = require('mongoose');

const taskSchema = new mongoose.schema({
    name: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false }
    });
    const Task = mongoose.model('Task', taskSchema);

    module.exports = Task;
