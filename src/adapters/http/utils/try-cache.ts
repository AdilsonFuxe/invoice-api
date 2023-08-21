import {Controller} from "@src/adapters/http/utils";

export function tryCatch(controller: Controller) {
  return async (input: Controller.Input) => {
    try {
      return await controller(input);
    } catch (e) {
      return {
        body: {error: "Internal Server Error"},
        status: 500
      }
    }
  }
}