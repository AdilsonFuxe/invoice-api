import {loadAllInvoices} from "@src/core/use-cases";
import {mockedInvoice} from "@test-helper/types";

const makeSut = () => {

  const loadAllInvoicesRepository = jest.fn().mockResolvedValue([mockedInvoice()]);

  const sut = loadAllInvoices({loadAllInvoicesRepository})

  return {
    sut,
    loadAllInvoicesRepository,
    mockedInvoice
  }
}


describe("LoadAllInvoices", () => {
  it('Should call loadAllInvoices with correct accountId', async () => {
    const {sut, loadAllInvoicesRepository} = makeSut();
    await sut('any_account_id');
    expect(loadAllInvoicesRepository).toHaveBeenCalledWith('any_account_id');
  })

  it('Should return a list of invoices on success', async () => {
    const {sut, mockedInvoice} = makeSut();
    const result = await sut('any_account_id');
    expect(result).toEqual([mockedInvoice()]);
  })
})