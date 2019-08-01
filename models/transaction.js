'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Transaction extends Model{
    static associate(models) {
      Transaction.belongsTo(models.User)
      Transaction.belongsTo(models.Drug)
    }
  }
  Transaction.init({
    UserId: DataTypes.INTEGER,
    DrugId: DataTypes.INTEGER,
    TotalItems: DataTypes.INTEGER,
    TotalPayment: DataTypes.INTEGER
  }, {sequelize})

  Transaction.addHook('afterCreate', (transaction, options) => {
    const Drug = require('./index').Drug
    Drug.findByPk(transaction.DrugId)
    .then(data => {
      Drug.update({stock: (data.stock - transaction.TotalItems)}, {where:{id: transaction.DrugId}})
    })
  })
  return Transaction;
};