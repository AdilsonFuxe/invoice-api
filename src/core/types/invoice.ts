
export type Job = {
  description: string;
  price: number
}


export type BankInfo = {
  fullName: string,
  bic: string,
  iban: string
}

export type Invoice = {
  id: string
  accountId: string,
  reference: number,
  jobs: ReadonlyArray<Job>,
  companyName: string,
  companyInfo: string,
  bankInfo: BankInfo,
  generatedAt: Date,
  expiresIn: Date,
  createdAt: Date,
  updatedAt: Date
}