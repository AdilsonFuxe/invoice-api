import {Controller} from "@src/adapters/http/utils";
import {FastifyReply, FastifyRequest} from "fastify";

export const fastfyHttpAdapter = (controller: Controller) => async (req: FastifyRequest, reply: FastifyReply) => {
  const input: Controller.Input = {
    body: req.body,
    params: req.params,
    query: req.query
  }
  const result = await controller(input);
  return reply.status(result.status).send(result.body);
}