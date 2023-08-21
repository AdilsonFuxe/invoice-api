import {createInvoice, deleteInvoiceById, loadAllInvoices, loadInvoiceById} from "@src/core/use-cases";
import {
  createInvoiceRepository,
  deleteInvoiceByIdRepository,
  loadAllInvoicesRepository,
  loadInvoiceByIdRepository
} from "@src/ports/db/mongoose/repositories";

export const createInvoiceAdapter = (params) => createInvoice({createInvoiceRepository})(params);
export const deleteInvoiceByIdAdapter = (id) => deleteInvoiceById({deleteInvoiceByIdRepository})(id);
export const loadAllInvoicesAdapter = (accountId) => loadAllInvoices({loadAllInvoicesRepository})(accountId);
export const loadInvoiceByIdAdapter = (id) => loadInvoiceById({loadInvoiceByIdRepository})(id);