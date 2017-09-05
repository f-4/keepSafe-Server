module.exports = function(sequelize, DataTypes) {
  const Crime = sequelize.define('Crime', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    crimeType: Sequelize.STRING,
    crimeTime: Sequelize.STRING,
    longitude: Sequelize.DOUBLE,
    latitude: Sequelize.DOUBLE
  });
  return Crime;
}
