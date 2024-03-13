import express from 'express';
import dotenv from 'dotenv';
import cookieSession from 'cookie-session';

// read environment variables from .env file
dotenv.config();
const PORT = process.env.PORT ?? 8000;

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

app.post('/login', (req, res) => {
  const { username, password } = req.body as {
    username: string;
    password: string;
  };

  if (!username) {
    res.status(400).send('Please provide a username!');
  }

  // db logic... make sure user is real and correct password

  req.session!.user = username;
  res.status(200).send('OK!');
});

// listen
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Now listening on port ${PORT}.`);
});
