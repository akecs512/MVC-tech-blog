// import models
const Users = require("./Users");
const TechInfo = require("./Tech_Info");

// TechInfo belongsTo Users
TechInfo.belongsTo(Users, {
  foreignKey: "user_id",
});

// Users have many TechInfo
Users.hasMany(TechInfo, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = {
  TechInfo,
  Users,
};
