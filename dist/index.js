"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const app = express_1.default();
//DB connection
const DBConnection_1 = __importDefault(require("./Assets/DB/DBConnection"));
DBConnection_1.default.Mongoose;
//Default middelwares
const cors_1 = __importDefault(require("cors"));
app.use(cors_1.default());
const body_parser_1 = __importDefault(require("body-parser"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
//Custom middlewares
const auth_route_1 = __importDefault(require("./Routes/auth.route"));
app.use('/auth', auth_route_1.default);
const taskheader_route_1 = __importDefault(require("./Routes/taskheader.route"));
app.use('/taskheader', taskheader_route_1.default);
const tasklist_route_1 = __importDefault(require("./Routes/tasklist.route"));
app.use('/tasklist', tasklist_route_1.default);
//404 Not Found
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.httpStatusCode = 404;
    next(error);
});
//Error handler
app.use((error, req, res, next) => {
    res.status(error.httpStatusCode).send({
        status: error.httpStatusCode || 500,
        message: error.message
    });
});
//App listening PORT
app.listen(process.env.APP_PORT, () => {
    console.log(`Server started at http://localhost:${process.env.APP_PORT}`);
});
//# sourceMappingURL=index.js.map