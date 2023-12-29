import "dotenv/config";
import fs from 'fs';
import { Sequelize, DataTypes } from 'sequelize';

// const sequelize = new Sequelize({
//   dialect: 'postgres',
//   host: process.env.POSTGRES_HOST,
//   database: process.env.POSTGRES_DB,
//   username: process.env.POSTGRES_USER,
//   password: process.env.POSTGRES_PASSWORD,
//   logging: false,
// });

const sequelize = new Sequelize(process.env.ELEPHANT_SQL_URL);

const Product = sequelize.define('product', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  namespaceId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'namespaceId',
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  priceRegular: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'priceRegular',
  },
  priceDiscount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'priceDiscount',
  },
  capacityAvailable: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    field: 'capacityAvailable',
  },
  capacity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  colorsAvailable: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    field: 'colorsAvailable',
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  description: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false,
  },
  screen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  resolution: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  processor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ram: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  camera: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zoom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cell: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
},
{
  createdAt: false,
  updatedAt: false,
});

fs.readFile('src/api/products.json', 'utf-8', (readErr, data) => {
  if (readErr) {
    console.error(`Error reading products.json:`, readErr);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    jsonData.forEach(async (item) => {
      const {
        category,
        image,
        year,
        itemId,
      } = item;

      await Product.update({
        category,
        image,
        year,
      }, { where: { id: itemId} });
    })
  } catch (parseErr) {
    console.error(`Parsing error products.json:`, parseErr);
  }
});
