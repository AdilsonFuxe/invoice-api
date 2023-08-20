import {Invoice} from "@src/core/types";


export type CreateInvoice = (params: CreateInvoice.Params) => Promise<CreateInvoice.Response>

export namespace CreateInvoice {
  export type Params = Omit<Invoice, 'id' | 'createdAt' | 'updatedAt'>;
  export type Response = Invoice;
}


type Dependencies = {
  createInvoiceRepository: CreateInvoice
}

type BuildCreateInvoice = (dependencies: Dependencies) => CreateInvoice;


export const createInvoice: BuildCreateInvoice = ({createInvoiceRepository}) =>
  async (params) =>
    await createInvoiceRepository(params);