import bcrypt from "bcryptjs";
export const hashPassword = (password) => bcrypt.hash(password, 10);
export const comparePassword = async (plain, hashed) => {
    return bcrypt.compare(plain, hashed);
};
