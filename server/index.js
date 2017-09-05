import express from "express";
import bodyParser from "body-parser";
import comments from "./comments";
import products from "./products";
import vehicle from "./vehicles";
import contacts from "./contacts";

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
