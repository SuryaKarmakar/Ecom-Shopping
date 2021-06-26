import express from "express";
import data from "./data.js";
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/ecom', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(5000, () => {
  console.log("Serve at http://localhost:5000");
});

app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.use('/api/products', productRouter);
