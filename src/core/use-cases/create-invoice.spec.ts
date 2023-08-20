import {createInvoice} from "@src/core/use-cases";
import {mockedInvoice} from "@test-helper/types";

const makeSut = () => {
  const createInvoiceRepository = jest.fn().mockResolvedValue(mockedInvoice());
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

  const sut = createInvoice({createInvoiceRepository})

  return {
    sut,
    mockedParams,
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