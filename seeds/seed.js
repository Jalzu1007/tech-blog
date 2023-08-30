const path = require('path');
const sequelize = require('../config/connection');
const { User, Post } = require('../models/index');

// Create absolute paths to JSON data files
const userDataPath = path.join(__dirname, 'userData.json');
const postDataPath = path.join(__dirname, 'postData.json');

// Load JSON data
const userData = require(userDataPath);
const postData = require(postDataPath);

// Function to truncate tables
const truncateTables = async () => {
  await Promise.all([
    Post.destroy({ truncate: true }),
    User.destroy({ truncate: true }),
  ]);
};

// Main seed function
const seedDatabase = async () => {
  try {
    // Connect to the database
    await sequelize.authenticate();
    console.log('Connected to the database.');

    // Truncate tables to remove existing data
    await truncateTables();

    // Insert users
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    // Insert posts
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

    console.log('Database seeding complete.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
    await sequelize.close();
    console.log('Database connection closed.');
    process.exit(0);
  }
};

// Call the main seed function
seedDatabase();