import {Controller, tryCatch} from "@src/adapters/http/utils";
import {loadInvoiceByIdAdapter, updateInvoiceAdapter} from "@src/adapters/usecases";

const updateInvoice: Controller = async (input) => {
  const {id} = input.params;
  const result = await loadInvoiceByIdAdapter(id);
  if (!result) {
    return {
      status: 404,
      body: {error: `Invoice with id ${id} not found`}
    }
  }
  const updatedInvoice = await updateInvoiceAdapter(id, input.body);
  return {
    status: 200,
    body: updatedInvoice
  }
}

export default tryCatch(updateInvoice);