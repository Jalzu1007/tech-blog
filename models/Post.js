const sequelize = require('../config/connection');
const { User, Post } = require('../models');
const userData = require('./userData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    try {
      await Post.create({
        username: post.username,
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