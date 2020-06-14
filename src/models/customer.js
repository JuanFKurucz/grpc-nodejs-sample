const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

const Customer = sequelize.define(
  "Customer",
  {
    Id: {
      type: DataTypes.INTEGER(2),
      primaryKey: true,
      autoIncrement: true,
    },
    First_Name: {
      type: DataTypes.STRING(100),
    },
    Last_Name: {
      type: DataTypes.STRING(100),
    },
    Gender: {
      type: DataTypes.CHAR(10),
    },
    Age: {
      type: DataTypes.STRING(100),
    },
    Occupation: {
      type: DataTypes.STRING(100),
    },
    MaritalStatus_Out: {
      type: DataTypes.STRING(100),
    },
    Salary_Out: {
      type: DataTypes.STRING(100),
    },
    Address: {
      type: DataTypes.STRING(100),
    },
    City: {
      type: DataTypes.STRING(100),
    },
    State: {
      type: DataTypes.STRING(100),
    },
    Zip: {
      type: DataTypes.STRING(100),
    },
    Phone: {
      type: DataTypes.STRING(100),
    },
    Email: {
      type: DataTypes.STRING(100),
    },
  },
  {
    tableName: "customers",
    timestamps: false,
  }
);

module.exports = { Customer };
