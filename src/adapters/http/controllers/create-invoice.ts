import {createInvoiceAdapter} from "@src/adapters/usecases";
import {Controller, tryCatch} from "@src/adapters/http/utils";

const createInvoice: Controller = async (input) => {
  const result = await createInvoiceAdapter(input);
  return {
    body: result,
    status: 200
  }
}

export default tryCatch(createInvoice);