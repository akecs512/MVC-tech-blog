const Users = require("./Users");
const TechInfo = require("./Tech_Info");
const Comments = require("./Comments");

TechInfo.belongsTo(Users, {
  foreignKey: "user_id",
});

Users.hasMany(TechInfo, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comments.belongsTo(TechInfo, {
  foreignKey: "post_id",
})

TechInfo.hasMany(Comments, {
  foreignKey: "comment_id",
  onDelete: "CASCADE",
});


module.exports = {
  TechInfo,
  Users,
  Comments,
};
