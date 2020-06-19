"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const Mongoose = mongoose_1.default.connect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err)
        return err;
    console.log('DB connected successfully!');
});
module.exports = Mongoose;
//# sourceMappingURL=DBConnection.js.map