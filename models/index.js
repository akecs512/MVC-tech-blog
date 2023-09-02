const Users = require("./Users");
const TechInfo = require("./Tech_Info");

TechInfo.belongsTo(Users, {
  foreignKey: "user_id",
});

Users.hasMany(TechInfo, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = {
  TechInfo,
  Users,
};
