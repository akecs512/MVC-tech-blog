const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Post, {
  foreignKey : 'userId',
  targetKey: 'id',
  onDelete: "CASCADE",

});
Post.belongsTo(User, {
  foreignKey : 'userId',
  targetKey: 'id'
});

Post.hasMany(Comment, {
  foreignKey : 'postId',
  targetKey: 'id',
  onDelete: "CASCADE", 
})

Comment.belongsTo(Post, {
  foreignKey: "postId",
  targetKey: 'id'
});

Comment.belongsTo(User, {
  foreignKey: "userId",
  targetKey: 'id'
})

module.exports = {
  Post,
  User,
  Comment,
};
