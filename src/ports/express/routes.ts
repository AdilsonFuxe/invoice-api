import {Router} from "express";
import {
  createInvoiceController,
  deleteInvoiceByIdController,
  loadInvoiceByIdController,
  updateInvoiceController
} from "@src/adapters/http/controllers";

import {expressHttpAdapter} from "@src/adapters/http/express-http-adapter";

const router = Router();

router.post('/invoices', expressHttpAdapter(createInvoiceController))

router.delete('/invoices/:id', expressHttpAdapter(deleteInvoiceByIdController))

router.get('/invoices/:id', expressHttpAdapter(loadInvoiceByIdController));

router.put('/invoices/:id', expressHttpAdapter(updateInvoiceController));

export default router;