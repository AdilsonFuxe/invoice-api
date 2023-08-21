import {Request, Response} from "express";
import {Controller} from "@src/adapters/http/utils";

export const expressHttpAdapter = (controller: Controller) => async  (req: Request, res: Response)=> {
  const input: Controller.Input = {
    body: req.body,
    params: req.params,
    query: req.query
  }
  const result = await controller(input);
  return res.status(result.status).json(result.body);
}