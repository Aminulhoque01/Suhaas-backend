"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = __importDefault(require("./modules/user/user.route"));
const auth_routes_1 = __importDefault(require("./modules/auth/auth.routes"));
const project_route_1 = __importDefault(require("./modules/projects/project.route"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/health", (req, res) => {
    res.json({ status: "OK" });
});
app.use('/auth', auth_routes_1.default);
app.use('/users', user_route_1.default);
app.use('/project', project_route_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map