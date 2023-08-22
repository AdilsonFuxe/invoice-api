import express from 'express';
import cors from 'cors';
import routes from "@src/ports/express/routes";
import env from "@src/config/env";

const app = express();

const PORT = env.port;

app.use(express.json());
app.use(cors())
app.use('/api/v1',routes)

export function start() {
  app.listen(PORT, () => {
    `Server listening on port ${PORT}`
  });
}