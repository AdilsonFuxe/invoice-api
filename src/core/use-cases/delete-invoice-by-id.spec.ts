import {deleteInvoiceById} from "@src/core/use-cases";

const makeSut = () => {

  const deleteInvoiceByIdRepository = jest.fn();

  const sut = deleteInvoiceById({deleteInvoiceByIdRepository})

  return {
    sut,
    deleteInvoiceByIdRepository
  }
}

describe("Delete Invoice", () => {
  it("Should call deleteInvoiceByIdRepository with invoice id", async () => {
    const {sut, deleteInvoiceByIdRepository} = makeSut();
    await sut('any_invoice_id');
    expect(deleteInvoiceByIdRepository).toHaveBeenCalledWith('any_invoice_id');
    expect(deleteInvoiceByIdRepository).toHaveBeenCalledTimes(1);
  })
})