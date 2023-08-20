import {deleteInvoice} from "@src/core/use-cases";

const makeSut = () => {

  const deleteInvoiceRepository = jest.fn();

  const sut = deleteInvoice({deleteInvoiceRepository})

  return {
    sut,
    deleteInvoiceRepository
  }
}

describe("Delete Invoice", () => {
  it("Should call deleteInvoiceRepository with invoice id", async () => {
    const {sut, deleteInvoiceRepository} = makeSut();
    await sut('any_invoice_id');
    expect(deleteInvoiceRepository).toHaveBeenCalledWith('any_invoice_id');
    expect(deleteInvoiceRepository).toHaveBeenCalledTimes(1);
  })
})