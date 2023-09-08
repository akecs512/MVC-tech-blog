// Imports
const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const userData = require("./userData.json");
const blogPostData = require("./blogPostData.json");
const commentData = require("./commentData.json");

// Seeds database with user data, blogPost data, and comment data
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blogPost of blogPostData) {
    await Post.create({
      ...blogPost,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const comments = await Comment.bulkCreate(commentData);

  process.exit(0);
};

// Function call to seed database
seedDatabase();
