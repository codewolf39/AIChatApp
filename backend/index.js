import express from "express";
import ImageKit from "imagekit";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

app.get("/api/upload", function (req, res) {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});

app.listen(port, (req, res) => {
  console.log("Backend connection established");
});
