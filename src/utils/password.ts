import bcrypt from 'bcrypt';

export const hashPassword = (password: string) =>
  bcrypt.hash(password, 10);

 
 

export const comparePassword = async (
  plain: string,
  hashed: string
): Promise<boolean> => {
  return bcrypt.compare(plain, hashed);
};