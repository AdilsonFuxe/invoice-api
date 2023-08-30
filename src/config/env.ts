export default {
  port: parseInt(process.env.PORT ?? "5050"),
  mongodbURI: process.env.MONGO_URI
}