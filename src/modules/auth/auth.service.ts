 
 
import crypto from 'crypto';
import { User } from '../user/user.module';
import { ApiError } from '../../utils/ApiError';
import { comparePassword, hashPassword } from '../../utils/password';
import { signToken } from '../../utils/jwt';
import { Invite } from '../invites/invite.model';



const normalizeEmail = (email: string) =>
  email.toLowerCase().trim();

const login = async (email: string, password: string) => {
  const user = await User.findOne({
    email: normalizeEmail(email),
  });

  if (!user) {
    throw new ApiError(401, 'User not found');
  }

  if (user.status !== 'ACTIVE') {
    throw new ApiError(403, 'User is inactive');
  }

  const isMatch = await comparePassword(password, user.password as string);
  if (!isMatch) {
    throw new ApiError(401, 'Invalid credentials');
  }

  return signToken({ id: user._id, role: user.role });
};




const inviteUser = async (email: string, role: string) => {
  const token = crypto.randomBytes(32).toString('hex');

  return Invite.create({
    email,
    role,
    token,
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
  });
};

const registerViaInvite = async (
  token: string,
  name: string,
  password: string
) => {
  const invite = await Invite.findOne({ token, acceptedAt: null });

  if (!invite || invite.expiresAt < new Date()) {
    throw new ApiError(400, 'Invite expired or invalid');
  }

  // 🔥 CHECK EXISTING USER
  const existingUser = await User.findOne({ email: invite.email });
  if (existingUser) {
    throw new ApiError(409, 'User already registered with this email');
  }

  const user = await User.create({
    name,
    email: invite.email.toLowerCase().trim(),
    role: invite.role,
    password: await hashPassword(password),
    status: 'ACTIVE',
    invitedAt: new Date(),
  });

  invite.acceptedAt = new Date();
  await invite.save();

  return {
    id: user._id,
    email: user.email,
    role: user.role,
  };
};


export const AuthService={
  login,
  inviteUser,
  registerViaInvite

}