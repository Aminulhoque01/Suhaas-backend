"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectStatus = exports.UserStatus = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["MANAGER"] = "MANAGER";
    UserRole["STAFF"] = "STAFF";
})(UserRole || (exports.UserRole = UserRole = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "ACTIVE";
    UserStatus["INACTIVE"] = "INACTIVE";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["ACTIVE"] = "ACTIVE";
    ProjectStatus["ARCHIVED"] = "ARCHIVED";
    ProjectStatus["DELETED"] = "DELETED";
})(ProjectStatus || (exports.ProjectStatus = ProjectStatus = {}));
//# sourceMappingURL=enums.js.map