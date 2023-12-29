import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db.js';

export const Product = sequelize.define('product', {
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
