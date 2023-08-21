import {Invoice} from "@src/core/types";
import {Document, Model, Schema, model} from 'mongoose';

type InvoiceDocument = Invoice & Document & { id: Document['_id'] }
type InvoiceMongooseModel = Model<InvoiceDocument> & { id: Document['_id'] }

const JobSchema = new Schema({
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  }
}, {
  _id: false
})

const BankInfoSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  bic: {
    type: String,
    required: true,
    trim: true
  },
  iban: {
    type: String,
    required: true,
    trim: true
  },
}, {
  _id: false
})

const InvoiceSchema = new Schema<InvoiceDocument>({
    accountId: {
      type: String,
      required: true,
      trim: true
    },
    reference: {
      type: Number
    },
    jobs: {
      type: [JobSchema],
      required: true
    },
    companyName: {
      type: String,
      trim: true
    },
    companyInfo: {
      type: String,
      trim: true
    },
    bankInfo: {
      type: BankInfoSchema
    },
    generatedAt: {
      type: Date
    },
    expiresIn: {
      type: Date
    }
  },
  {
    timestamps: true
  })

export default model<InvoiceDocument, InvoiceMongooseModel>("invoices", InvoiceSchema);