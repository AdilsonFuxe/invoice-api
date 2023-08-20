import {Invoice} from "@src/core/types";

export const mockedInvoice = (): Invoice => ({
  id: 'any_id',
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
  generatedAt: new Date(),
  createdAt: new Date(),
  updatedAt: new Date()
})