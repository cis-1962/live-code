import express from 'express';
import z from 'zod';
import { createUser } from '../lib/auth';

const AuthRouter = express.Router();

const signupSchema = z.object({
  username: z.string().min(6),
  password: z.string().min(8),
});

AuthRouter.post('/signup', async (req, res) => {
  const zodResult = signupSchema.safeParse(req.body);
  if (!zodResult.success) {
    res.status(400).send('Invalid input!');
    return;
  }

  const { username, password } = zodResult.data;
  await createUser(username, password);

  req.session!.user = username;
  res.status(200).send('OK!');
});

export default AuthRouter;
