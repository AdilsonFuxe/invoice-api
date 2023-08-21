import {Controller, tryCatch} from "@src/adapters/http/utils";
import {loadInvoiceByIdAdapter} from "@src/adapters/usecases";

const loadInvoiceById: Controller = async (input) => {
  const {id} = input.params;
  const result = await loadInvoiceByIdAdapter(id);
  if (!result) {
    return {
      status: 404,
      body: {error: `Invoice with id ${id} not found`}
    }
  }
  return {
    status: 200,
    body: result
  }
}

export default tryCatch(loadInvoiceById);