import {Invoice} from "@src/core/types";

export type LoadInvoiceById = (id: string) => Promise<LoadInvoiceById.Response>

export namespace LoadInvoiceById {
  export type Response = Invoice;
}

type Dependencies = {
  loadInvoiceByIdRepository: LoadInvoiceById
}

type BuildLoadInvoiceById = (dependencies: Dependencies) => LoadInvoiceById;

export const loadInvoiceById: BuildLoadInvoiceById = ({loadInvoiceByIdRepository}) => async (id) => await loadInvoiceByIdRepository(id)