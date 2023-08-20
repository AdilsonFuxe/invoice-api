import {loadInvoiceById} from "@src/core/use-cases";
import {mockedInvoice} from "@test-helper/types";

const makeSut = () => {

  const loadInvoiceByIdRepository = jest.fn().mockResolvedValue(mockedInvoice());

  const sut = loadInvoiceById({loadInvoiceByIdRepository})

  return {
    sut,
    loadInvoiceByIdRepository,
    mockedInvoice
  }
}

describe("LoadInvoiceById", () => {
  it('Should call loadInvoiceByIdRepository with correct invoiceId', async () => {
    const {sut, loadInvoiceByIdRepository} = makeSut();
    await sut('any_invoice_id');
    expect(loadInvoiceByIdRepository).toHaveBeenCalledWith('any_invoice_id');
    expect(loadInvoiceByIdRepository).toHaveBeenCalledTimes(1);
  })

  it('Should return an invoice on success', async () => {
    const {sut, mockedInvoice} = makeSut();
    const result = await sut('any_invoice_id');
    expect(result).toEqual(mockedInvoice());
  })
})