import "dotenv/config";
import { sequelize } from "./db.js";
import "../models/Product.js";

sequelize.sync({ force: true });
