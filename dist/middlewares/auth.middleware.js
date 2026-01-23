"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token)
        return res.sendStatus(401);
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // now TS knows this exists
        next();
    }
    catch (err) {
        return res.sendStatus(401);
    }
};
exports.auth = auth;
const isAdmin = (req, res, next) => {
    if (req.user?.role !== 'ADMIN')
        return res.sendStatus(403);
    next();
};
exports.isAdmin = isAdmin;
//# sourceMappingURL=auth.middleware.js.map