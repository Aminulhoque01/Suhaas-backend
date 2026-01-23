"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const user_controller_1 = require("../user/user.controller");
const auth_controller_1 = require("./auth.controller");
const router = (0, express_1.Router)();
router.post('/register', user_controller_1.UserController.registerUser);
router.post('/login', auth_controller_1.AuthController.login);
router.post('/invite', auth_middleware_1.auth, auth_middleware_1.isAdmin, auth_controller_1.AuthController.invite);
router.post('/register-via-invite', auth_controller_1.AuthController.registerViaInvite);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map