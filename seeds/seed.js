const path = require('path');
const sequelize = require('../config/connection');
const { User, Post } = require('../models');

// Create absolute paths to JSON data files
const userDataPath = path.join(__dirname, 'userData.json');
const postDataPath = path.join(__dirname, 'postData.json');

// Load JSON data
const userData = require(userDataPath);
const postData = require(postDataPath);

console.log(postData);

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    try {
      await Post.create({
        title: post.title,
        comment: post.comment,
        content: post.content,
        post_date: post.post_date,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    } catch (error) {
      console.error('Error inserting post:', error);
    }
  }

  process.exit(0);
};

seedDatabase();