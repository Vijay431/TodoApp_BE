"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TaskHeaderSchema = mongoose_1.default.Schema({
    token: {
        type: String,
        require: 'required'
    },
    header: {
        type: String
    },
    headerID: {
        type: String
    }
});
module.exports = mongoose_1.default.model('task_headers', TaskHeaderSchema);
//# sourceMappingURL=taskheader.model.js.map