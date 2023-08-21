import {createInvoice} from "@src/core/use-cases";
import {createInvoiceRepository} from "@src/ports/db/mongoose/repositories";

export const createInvoiceAdapter = (params) => createInvoice({createInvoiceRepository})(params);