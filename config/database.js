import { Sequelize } from "sequelize";

const db = new Sequelize("auth_express", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

export default db;
