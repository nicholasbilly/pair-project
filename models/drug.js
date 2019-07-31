'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Drug extends Model {
    static associate (models) {
      Drug.hasMany(models.Transaction)
    }
  }
  Drug.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {sequelize})
  return Drug;
};