import express from 'express';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT ?? 5050

app.use(express.json());
app.use(cors())

export function start() {
  app.listen(PORT, () => {
    `Server listening on port ${PORT}`
  });
}