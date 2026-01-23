"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const project_controller_1 = require("./project.controller");
const router = (0, express_1.Router)();
// Create a new project (any authenticated user)
router.post('/', auth_middleware_1.auth, project_controller_1.ProjectController.create);
// Get all projects (any authenticated user)
router.get('/', auth_middleware_1.auth, project_controller_1.ProjectController.getAll);
// Update a project (admin only)
router.patch('/:id', auth_middleware_1.auth, auth_middleware_1.isAdmin, project_controller_1.ProjectController.update);
// Soft delete a project (admin only)
router.delete('/:id', auth_middleware_1.auth, auth_middleware_1.isAdmin, project_controller_1.ProjectController.remove);
exports.default = router;
//# sourceMappingURL=project.route.js.map