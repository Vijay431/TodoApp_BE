"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const AuthSchema = mongoose_1.default.Schema({
    username: {
        type: String,
        required: 'required'
    },
    password: {
        type: String,
        required: 'required'
    }
});
module.exports = mongoose_1.default.model('users', AuthSchema);
//# sourceMappingURL=auth.model.js.map