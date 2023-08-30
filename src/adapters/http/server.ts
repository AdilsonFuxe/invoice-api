//import { start } from "@src/ports/fastify"
import {start} from "@src/ports/express";
import {MongoHelper} from "@src/ports/db/mongoose/helper";
import env from "@src/config/env";


MongoHelper.connect(env.mongodbURI).then(async () => {
  await start();
})
