export type DeleteInvoiceById = (id: string) => Promise<void>

type Dependencies = {
  deleteInvoiceByIdRepository: DeleteInvoiceById
}

type BuildDeleteInvoiceById = (dependencies: Dependencies) => DeleteInvoiceById;

export const deleteInvoiceById: BuildDeleteInvoiceById = ({deleteInvoiceByIdRepository}) =>
  async (id) => {
    await deleteInvoiceByIdRepository(id);
  }
