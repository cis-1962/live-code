import express from 'express';
import dotenv from 'dotenv';
import cookieSession from 'cookie-session';
import AuthRouter from './routes/auth';
import mongoose from 'mongoose';

// read environment variables from .env file
dotenv.config();
const PORT = process.env.PORT ?? 8000;

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/express';
mongoose.connect(MONGODB_URI, {});

const app = express();
app.use(express.json());

app.use(
  cookieSession({
    secret: 'MyVerySecretString',
    keys: ['random-secret'],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  }),
);

app.use((req, res, next) => {
  console.log(req.session);
  next();
});

app.get('/hello', (req, res) => {
  res.status(200).send('hello!');
});

app.use('/auth', AuthRouter);

// listen
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Now listening on port ${PORT}.`);
});
