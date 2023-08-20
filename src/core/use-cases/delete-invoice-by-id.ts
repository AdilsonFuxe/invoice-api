export type DeleteInvoice = (id: string) => Promise<void>

type Dependencies = {
  deleteInvoiceRepository: DeleteInvoice
}

type BuildDeleteInvoice = (dependencies: Dependencies) => DeleteInvoice;

export const deleteInvoice: BuildDeleteInvoice = ({deleteInvoiceRepository}) =>
  async (id) => {
    await deleteInvoiceRepository(id);
  }
