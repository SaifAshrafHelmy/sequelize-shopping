import express from 'express';
import { sequelize } from './utils/db.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: "You're good to go bro!" });
});

app.listen(port, () => {
  console.log(`Express app is listening on http://localhost:${port}`);
});
