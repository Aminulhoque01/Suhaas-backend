"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.get('/', auth_middleware_1.auth, auth_middleware_1.isAdmin, user_controller_1.UserController.getUsers);
router.patch('/:id/role', auth_middleware_1.auth, auth_middleware_1.isAdmin, user_controller_1.UserController.changeRole);
router.patch('/:id/status', auth_middleware_1.auth, auth_middleware_1.isAdmin, user_controller_1.UserController.changeStatus);
exports.default = router;
//# sourceMappingURL=user.route.js.map