import express from "express";
import bodyParser from "body-parser";
import comments from "./comments";
import products from "./products";
import vehicle from "./vehicles";
import contacts from "./contacts";
import ContactsRoutes from "./routes/ContactsRoutes";
import ProductsRoutes from "./routes/ProductsRoutes";
import VehiclesRoutes from "./routes/VehiclesRoutes";
import CommentsRoutes from "./routes/CommentsRoutes";


import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/advanced-express-practice");

const app = express();
app.use(bodyParser.json());
app.use(ContactsRoutes);
app.use(ProductsRoutes);
app.use(VehiclesRoutes);
app.use(CommentsRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
