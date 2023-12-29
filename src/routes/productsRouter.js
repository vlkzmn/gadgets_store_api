import express from 'express';

import { productController } from '../controllers/productController.js';
import { catchError } from '../middlewares/catchError.js';

export const productsRouter = new express.Router();

productsRouter.get('/products', catchError(productController.getProducts));
productsRouter.get('/category/:category', catchError(productController.getProductsByCategory));
productsRouter.get('/product/:id', catchError(productController.getProduct));
