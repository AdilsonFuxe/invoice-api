import {Controller, tryCatch} from "@src/adapters/http/utils";
import {deleteInvoiceByIdAdapter} from "@src/adapters/usecases";

const deleteInvoiceById: Controller = async (input) => {
  const {id} = input.params;
   await deleteInvoiceByIdAdapter(id);
  return {
    status: 204
  }
}

export default tryCatch(deleteInvoiceById);