import {createInvoice, deleteInvoiceById, loadAllInvoices, loadInvoiceById, updateInvoice} from "@src/core/use-cases";
import {
  createInvoiceRepository,
  deleteInvoiceByIdRepository,
  loadAllInvoicesRepository,
  loadInvoiceByIdRepository,
  updateInvoiceRepository
} from "@src/ports/db/mongoose/repositories";

export const createInvoiceAdapter = async (params) => await createInvoice({createInvoiceRepository})(params);
export const deleteInvoiceByIdAdapter = async (id) => await deleteInvoiceById({deleteInvoiceByIdRepository})(id);
export const loadAllInvoicesAdapter = async (accountId) => await loadAllInvoices({loadAllInvoicesRepository})(accountId);
export const loadInvoiceByIdAdapter = async (id) => await loadInvoiceById({loadInvoiceByIdRepository})(id);
export const updateInvoiceAdapter = async (id, params) => await updateInvoice({updateInvoiceRepository})(id, params);