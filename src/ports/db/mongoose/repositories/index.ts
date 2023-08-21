import {CreateInvoice, DeleteInvoiceById, LoadAllInvoices, LoadInvoiceById} from '@src/core/use-cases';
import {InvoiceModel} from "@src/ports/db/mongoose/model";
import {MongoHelper} from "@src/ports/db/mongoose/helper";

export const createInvoiceRepository: CreateInvoice = async (params) => {
  const doc = new InvoiceModel(params);
  await doc.save();
  return MongoHelper.serialize(doc);
}

export const deleteInvoiceByIdRepository: DeleteInvoiceById = async (id) => {
  await InvoiceModel.findByIdAndDelete(id);
}

export const loadAllInvoicesRepository: LoadAllInvoices = async (accountId) => {
  const result = await InvoiceModel.find({accountId});
  return result.map(MongoHelper.serialize);
}

export const loadInvoiceByIdRepository: LoadInvoiceById = async (id) => {
  const result = await InvoiceModel.findById(id);
  return MongoHelper.serialize(result);
}