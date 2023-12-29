import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import { errorMiddleware } from './middlewares/errorMiddleware.js';
import { productsRouter } from './routes/productsRouter.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CLIENT_URL,
}));

app.use(express.json());
app.use(productsRouter);
app.use(errorMiddleware);

app.listen(PORT, () => console.log('Server is running'));
