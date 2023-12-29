import { productService } from '../services/productService.js';

async function getProducts(req, res, next) {
  const products = await productService.getProducts();

  res.send(products);
}

async function getProductsByCategory(req, res, next) {
  const { category } = req.params;
  const products = await productService.getProductsByCategory(category);

  res.send(products);
}

async function getProduct(req, res, next) {
  const { id } = req.params;
  const product = await productService.getProduct(id);

  res.send(product);
}

export const productController = {
  getProducts,
  getProductsByCategory,
  getProduct 
};