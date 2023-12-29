import { QueryTypes } from 'sequelize';
import { sequelize } from '../utils/db.js';
import { Product } from '../models/Product.js';

async function getProducts() {
  const products = await sequelize.query(
    'SELECT id, category, name, "priceRegular" AS full_price, "priceDiscount" AS price, screen, capacity, color, ram, year, image FROM public.products',
    {
      type: QueryTypes.SELECT,
      mapToModel: true,
    }
  );

  return products;
}

async function getProductsByCategory(category) {
  const products = await sequelize.query(
    'SELECT id, category, name, "priceRegular" AS full_price, "priceDiscount" AS price, screen, capacity, color, ram, year, image FROM public.products WHERE category = :category',
    {
      replacements: { category },
      type: QueryTypes.SELECT,
      mapToModel: true,
    }
  );

  return products;
}

async function getProduct(id) {
  const product = await Product.findByPk(id);

  return product;
}

export const productService = {
  getProducts,
  getProductsByCategory,
  getProduct,
};
