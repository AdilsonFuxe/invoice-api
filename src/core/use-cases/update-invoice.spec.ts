import {updateInvoice} from "@src/core/use-cases";
import {mockedInvoice} from "@test-helper/types";

const makeSut = () => {

  const updateInvoiceRepository = jest.fn().mockResolvedValue(mockedInvoice());
  const mockedParams = () => ({
    reference: 10,
    accountId: 'any_account_id',
    jobs: [{
      description: 'any_description',
      price: 1500.00
    }],
    bankInfo: {
      bic: 'any_bic',
      iban: 'any_iban',
      fullName: 'any_name'
    },
    companyInfo: 'any_company_info',
    companyName: 'any_company_name',
    expiresIn: new Date(),
    generatedAt: new Date()
  })

  const sut = updateInvoice({updateInvoiceRepository})

  return {
    sut,
    mockedParams,
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