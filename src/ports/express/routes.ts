import {Router} from "express";
import {createInvoiceController} from "@src/adapters/http/controllers";

const router = Router();

router.post('/invoices', async (req, res) => {
  const result = await createInvoiceController(req.body);
  return res.status(result.status).json(result.body);
})

export default router;