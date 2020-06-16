"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router = express_1.default.Router();
const taskheader_model_1 = __importDefault(require("../Assets/Models/taskheader.model"));
Router.use('/get', (req, res, next) => {
    let token = req.query.token;
    if (!token) {
        const error = new Error('Invalid Token');
        error.httpStatusCode = 400;
        return next(error);
    }
    taskheader_model_1.default.find({ token: token }, (err, headers) => {
        if (err) {
            const error = new Error('Uh-Oh! Something went Wrong!');
            error.httpStatusCode = 500;
            return next(error);
        }
        else {
            if (headers.length != 0) {
                res.json({ message: 'success', headers: headers });
            }
            else {
                res.json({ message: 'faliure' });
            }
        }
    });
});
Router.use('/add', (req, res, next) => {
    let token = req.body.token;
    let header = req.body.header;
    let headerID = req.body.headerID;
    if (!token) {
        const error = new Error('Invalid Token');
        error.httpStatusCode = 400;
        return next(error);
    }
    if (!header) {
        const error = new Error('Invalid Header');
        error.httpStatusCode = 400;
        return next(error);
    }
    if (!headerID) {
        const error = new Error('Invalid Header ID');
        error.httpStatusCode = 400;
        return next(error);
    }
    const newHeader = new taskheader_model_1.default;
    newHeader.token = token;
    newHeader.header = header;
    newHeader.headerID = headerID;
    newHeader.save((err, header) => {
        if (err) {
            const error = new Error('Uh-Oh! Something went Wrong!');
            error.httpStatusCode = 500;
            return next(error);
        }
        else {
            if (Object.keys(header).length != 0) {
                res.json({ message: 'success' });
            }
            else {
                res.json({ message: 'failure' });
            }
        }
    });
});
Router.use('/delete', (req, res, next) => {
    let token = req.body.token;
    let headerID = req.body.headerID;
    if (!token) {
        const error = new Error('Invalid Token');
        error.httpStatusCode = 400;
        return next(error);
    }
    if (!headerID) {
        const error = new Error('Invalid Header ID');
        error.httpStatusCode = 400;
        return next(error);
    }
    taskheader_model_1.default.deleteOne({ headerID: headerID, token: token }, (err, docStatus) => {
        if (err) {
            const error = new Error('Uh-Oh! Something went Wrong!');
            error.httpStatusCode = 500;
            return next(error);
        }
        else {
            if (docStatus.deletedCount === 1) {
                res.json({ message: 'success' });
            }
            else {
                res.json({ message: 'failure' });
            }
        }
    });
});
module.exports = Router;
//# sourceMappingURL=taskheader.route.js.map