import { User } from "./user.module";

 

 const getUsers = async (page = 1, limit = 10) => {
  return User.find()
    .skip((page - 1) * limit)
    .limit(limit);
};

const updateUserRole = async (id: string, role: string) => {
  return User.findByIdAndUpdate(id, { role }, { new: true });
};

const updateUserStatus = async (id: string, status: string) => {
  return User.findByIdAndUpdate(id, { status }, { new: true });
};

export const userService={
  getUsers,
  updateUserRole,
  updateUserStatus
}