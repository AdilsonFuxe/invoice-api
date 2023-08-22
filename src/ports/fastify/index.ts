import fastify from "fastify";
import env from "@src/config/env";
import {
  createInvoiceController,
  deleteInvoiceByIdController,
  loadInvoiceByIdController,
  updateInvoiceController
} from "@src/adapters/http/controllers";
import {fastfyHttpAdapter} from "@src/adapters/http/fastfy-http-adapter";

const app = fastify({
  logger: true
})

app.post("/api/v1/invoices", fastfyHttpAdapter(createInvoiceController));
app.get("/api/v1/invoices/:id", fastfyHttpAdapter(loadInvoiceByIdController));
app.delete("/api/v1/invoices/:id", fastfyHttpAdapter(deleteInvoiceByIdController));
app.put("/api/v1/invoices/:id", fastfyHttpAdapter(updateInvoiceController));


export async function start() {
  await app.listen({
    port: env.port
  })
}
