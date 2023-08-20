import {createInvoice} from "@src/core/use-cases";
import {mockedInvoice, mockedCreateInvoiceParams} from "@test-helper/types";

const makeSut = () => {
  const createInvoiceRepository = jest.fn().mockResolvedValue(mockedInvoice());

  const sut = createInvoice({createInvoiceRepository})

  return {
    sut,
    mockedParams: mockedCreateInvoiceParams,
    createInvoiceRepository,
    mockedInvoice
  }
}

describe("Delete Invoice", () => {
  it('Should call createInvoiceRepository with correct params', async () => {
    const {sut, createInvoiceRepository, mockedParams} = makeSut();
    const params = mockedParams();
    await sut(params)
    expect(createInvoiceRepository).toHaveBeenCalledWith(params);
    expect(createInvoiceRepository).toBeCalledTimes(1);
  })
  it('Should create an invoice on success', async () => {
    const {sut, mockedParams, mockedInvoice} = makeSut();
    const invoice = await sut(mockedParams());
    expect(invoice).toEqual(mockedInvoice());
  })
})