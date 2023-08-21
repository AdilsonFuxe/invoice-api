import {Router} from "express";
import {
  createInvoiceController,
  deleteInvoiceByIdController,
  loadInvoiceByIdController,
  updateInvoiceController
} from "@src/adapters/http/controllers";
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

router.get('/invoices/:id', async (req, res) => {
  const input: Controller.Input = {
    body: req.body,
    params: req.params
  }
  const result = await loadInvoiceByIdController(input);
  return res.status(result.status).json(result.body);
});

router.put('/invoices/:id', async (req, res) => {
  const input: Controller.Input = {
    body: req.body,
    params: req.params
  }
  const result = await updateInvoiceController(input);
  return res.status(result.status).json(result.body);
});

export default router;