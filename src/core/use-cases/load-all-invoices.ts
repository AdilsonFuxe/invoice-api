import {Invoice} from "@src/core/types";

export type LoadAllInvoices = (accountId: string) => Promise<LoadAllInvoices.Response>

export namespace LoadAllInvoices {
  export type Response = ReadonlyArray<Invoice>;
}

type Dependencies = {
  loadAllInvoicesRepository: LoadAllInvoices
}

type BuildLoadAllInvoices = (dependencies: Dependencies) => LoadAllInvoices;

export const loadAllInvoices: BuildLoadAllInvoices = ({loadAllInvoicesRepository}) => async (accountId) => await loadAllInvoicesRepository(accountId)