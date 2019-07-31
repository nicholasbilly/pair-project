'use strict';
module.exports = (sequelize, DataTypes) => {
  const Drug = sequelize.define('Drug', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {});
  Drug.associate = function(models) {
    // associations can be defined here
  };
  return Drug;
};