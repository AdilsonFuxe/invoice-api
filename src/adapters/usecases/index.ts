import {createInvoice, deleteInvoiceById} from "@src/core/use-cases";
import {createInvoiceRepository, deleteInvoiceByIdRepository} from "@src/ports/db/mongoose/repositories";

export const createInvoiceAdapter = (params) => createInvoice({createInvoiceRepository})(params);
export const deleteInvoiceByIdAdapter = (id) => deleteInvoiceById({deleteInvoiceByIdRepository})(id);