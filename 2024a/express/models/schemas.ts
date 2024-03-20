import { Schema } from 'mongoose';

export interface IUser {
  username: string;
  hashed_password: string;
  salt: string;
}

export const UserSchema = new Schema<IUser>({
  username: { type: String, required: true },
  hashed_password: { type: String, required: true },
  salt: { type: String, required: true },
});
