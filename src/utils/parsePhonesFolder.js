import "dotenv/config";
import fs from 'fs';
import path from 'path';
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

const folderPath = 'src/api/products';

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  const jsonFiles = files.filter(file => path.extname(file).toLowerCase() === '.json');

  jsonFiles.forEach(jsonFile => {
    const filePath = path.join(folderPath, jsonFile);

    fs.readFile(filePath, 'utf-8', async (readErr, data) => {
      if (readErr) {
        console.error(`Error reading ${jsonFile}:`, readErr);
        return;
      }

      try {
        const jsonData = JSON.parse(data);
        const {
          id,
          name,
          namespaceId,
          category,
          capacityAvailable,
          capacity,
          priceRegular,
          priceDiscount,
          colorsAvailable,
          color,
          images,
          description,
          screen,
          resolution,
          processor,
          ram,
          camera,
          zoom,
          cell,
        } = jsonData;

        await Product.create({
          id,
          name,
          namespaceId,
          category,
          capacityAvailable,
          capacity,
          priceRegular,
          priceDiscount,
          colorsAvailable,
          color,
          images,
          description,
          screen,
          resolution,
          processor,
          ram,
          camera,
          zoom,
          cell,
          category: '0',
          year: '0',
          image: '0',
        });
      } catch (parseErr) {
        console.error(`Parsing error ${jsonFile}:`, parseErr);
      }
    });
  });
});
