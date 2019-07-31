'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  const converter = require('../helpers/priceConverter')
  class Drug extends Model {
    static associate (models) {
      Drug.hasMany(models.Transaction)
    }

    get getPrice() {
      return converter(this.price)
    }
  }
  Drug.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {sequelize})
  return Drug;
};