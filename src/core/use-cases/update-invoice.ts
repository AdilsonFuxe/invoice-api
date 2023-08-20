import {Invoice} from "@src/core/types";

export type UpdateInvoice = (id: string, params: UpdateInvoice.Params) => Promise<UpdateInvoice.Response>

export namespace UpdateInvoice {
  export type Params = Omit<Invoice, 'id' | 'createdAt' | 'updatedAt'>;
  export type Response = Invoice;
}

type Dependencies = {
  updateInvoiceRepository: UpdateInvoice
}

type BuildUpdateInvoice = (dependencies: Dependencies) => UpdateInvoice;

export const updateInvoice: BuildUpdateInvoice = ({updateInvoiceRepository}) =>
  async (id: string, params) =>
    await updateInvoiceRepository(id, params);