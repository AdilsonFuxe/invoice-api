import {CreateInvoice} from '@src/core/use-cases';
import {InvoiceModel} from "@src/ports/db/mongoose/model";
import {MongoHelper} from "@src/ports/db/mongoose/helper";


export const createInvoiceRepository: CreateInvoice = async (params) => {
  const doc = new InvoiceModel(params);
  await doc.save();
  return MongoHelper.serialize(doc);
