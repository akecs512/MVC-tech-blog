const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

Post.belongsTo(User, {
  foreignKey: "userId",
});

User.hasMany(Post, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "userId",
});


module.exports = {
  Post,
  User,
  Comment,
};
