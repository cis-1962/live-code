import mongoose from 'mongoose';
import { IUser, UserSchema } from './schemas';

export const User = mongoose.model<IUser>('User', UserSchema);
