import db from "../config/database.js";
import { DataTypes } from "sequelize";

const user = db.define(
  "user",
  {
    username: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(12),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    refresh_token: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  { freezeTableName: true }
);

export default user;
