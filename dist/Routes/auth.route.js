"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router = express_1.default.Router();
//Importing Model
const auth_model_1 = __importDefault(require("../Assets/Models/auth.model"));
//Login route
Router.use('/login', (req, res, next) => {
    let username = req.query.username;
    let password = req.query.password;
    if (!username) {
        const error = new Error('Invalid Username');
        error.httpStatusCode = 400;
        return next(error);
    }
    if (!password) {
        const error = new Error('Invalid Password');
        error.httpStatusCode = 400;
        return next(error);
    }
    auth_model_1.default.find({ username: username, password: password }, (err, user) => {
        if (err) {
            const error = new Error('Uh-Oh! Something went Wrong!');
            error.httpStatusCode = 500;
            return next(error);
        }
        else {
            if (user.length != 0) {
                res.json({ message: 'success' });
            }
            else {
                res.json({ message: 'failure' });
            }
        }
    });
});
//Register Route
Router.use('/register', (req, res, next) => {
    let username = req.query.username;
    let password = req.query.password;
    if (!username) {
        const error = new Error('Invalid Username');
        error.httpStatusCode = 400;
        return next(error);
    }
    if (!password) {
        const error = new Error('Invalid Password');
        error.httpStatusCode = 400;
        return next(error);
    }
    const auth = new auth_model_1.default();
    auth.username = username;
    auth.password = password;
    auth.save((err, user) => {
        if (err) {
            const error = new Error('Uh-Oh! Something went Wrong!');
            error.httpStatusCode = 500;
            return next(error);
        }
        else {
            if (user.length != 0) {
                res.json({ message: 'success' });
            }
            else {
                res.json({ message: 'failure' });
            }
        }
    });
});
module.exports = Router;
//# sourceMappingURL=auth.route.js.map