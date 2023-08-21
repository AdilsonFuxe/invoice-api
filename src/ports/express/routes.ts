import {Router} from "express";
import {createInvoiceController, deleteInvoiceByIdController} from "@src/adapters/http/controllers";
import {Controller} from "@src/adapters/http/utils";

const router = Router();

router.post('/invoices', async (req, res) => {
  const input: Controller.Input = {
    body: req.body,
    params: req.params
  }
  const result = await createInvoiceController(input);
  return res.status(result.status).json(result.body);
})

router.delete('/invoices/:id', async (req, res) => {
  const input: Controller.Input = {
    body: req.body,
    params: req.params
  }
  const result = await deleteInvoiceByIdController(input)
  return res.status(result.status).json(result.body);
})

export default router;