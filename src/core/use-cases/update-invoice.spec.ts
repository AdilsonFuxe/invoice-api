import {updateInvoice} from "@src/core/use-cases";
import {mockedCreateInvoiceParams, mockedInvoice} from "@test-helper/types";

const makeSut = () => {

  const updateInvoiceRepository = jest.fn().mockResolvedValue(mockedInvoice());

  const sut = updateInvoice({updateInvoiceRepository})

  return {
    sut,
    mockedParams: mockedCreateInvoiceParams,
    updateInvoiceRepository,
    mockedInvoice
  }
}

describe("UpdateInvoice", () => {
  it("should call updateInvoiceRepository with correct params", async () => {
    const {sut, mockedParams, updateInvoiceRepository} = makeSut();
    const params = mockedParams();
    await sut('any_invoice_id', params)
    expect(updateInvoiceRepository).toHaveBeenCalledWith('any_invoice_id', params);
    expect(updateInvoiceRepository).toHaveBeenCalledTimes(1);
  })

  it('Should return updated invoice on success', async () => {
    const {sut, mockedParams, mockedInvoice} = makeSut();
    const result = await sut('any_invoice_id', mockedParams());
    expect(result).toEqual(mockedInvoice())
  })
})