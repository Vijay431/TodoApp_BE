"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TaskListSchema = mongoose_1.default.Schema({
    token: {
        type: String,
        require: 'required'
    },
    taskID: {
        type: String
    },
    task: {
        type: String
    },
    headerID: {
        type: String
    },
    completed: {
        type: String
    }
});
module.exports = mongoose_1.default.model('tasks', TaskListSchema);
//# sourceMappingURL=tasklist.model.js.map