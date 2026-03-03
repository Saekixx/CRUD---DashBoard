import express from 'express';
import cors from 'cors';
import ProductRouter from './src/routes/product.route.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", ProductRouter);

export default app;