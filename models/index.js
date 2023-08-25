// import models
const Users = require('./Users');
const TravelInfo = require('./Travel_Info');

// TravelInfo belongsTo Users
TravelInfo.belongsTo(Users, {
  foreignKey: 'user_id',
});

// Users have many TravelInfo
Users.hasMany(TravelInfo, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = {
  TravelInfo,
  Users,
};
