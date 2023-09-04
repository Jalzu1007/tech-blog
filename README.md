# tech-blog

## Description

The Tech Blog CMS is a Content Management System (CMS) that allows developers to publish articles, blog posts, and share their thoughts and opinions on various tech topics. This application follows the Model-View-Controller (MVC) architectural pattern, using technologies such as Express.js, Sequelize, Handlebars.js, and more. It provides a user-friendly platform for tech enthusiasts to interact, share knowledge, and engage in discussions.

The motivation behind building this project was to create a platform where developers could not only work on their coding skills but also enhance their technical writing abilities. It offers a space for developers to share their expertise, learn from others, and foster a sense of community within the tech industry.

This project addresses the need for a dedicated space for tech enthusiasts to share their insights, discoveries, and experiences. It simplifies the process of creating and managing blog posts while also facilitating interactions through comments. Users can easily navigate the platform to read, comment, and contribute to the discussion on various tech-related topics.

During the development of this project, I gained valuable experience in building a full-stack web application using the MVC architectural pattern. I also learned how to integrate authentication, manage user sessions, and interact with a MySQL database using Sequelize. Additionally, I improved my skills in using Handlebars.js for templating and creating a clean and intuitive user interface.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To run the Tech Blog locally, follow these steps:

1. Clone the repository to your local machine: `git clone https://github.com/Jalzu1007/tech-blog.git`
2. Navigate to the project directory using the terminal.
3. Run `npm install` to install the required dependencies.
4. Create a .env file in the root directory of the project and add the following variables (Replace with your MYSQL database credentials.): 
    - DB_HOST= local server name
    - DB_PORT= port number
    - DB_NAME= database name
    - DB_USER= database username
    - DB_PASSWORD= database password
5. Run the application: `npm start` 
6. Open your web browser and navigate to the provided local URL.

## Usage

1. Homepage
    - When you visit the site for the first time, you are presented with the homepage, which includes existing blog posts (if any) and navigation links.
    - You have the option to log in or sign up.

2. Sign Up
    - Click on the "Sign Up" option in the navigation to create a new account.
    - Enter a username and password, then click the "Sign Up" button.
    - Your user credentials are saved, and you are logged into the site.

3. Sign In
    - If you have an existing account, click on the "Sign In" option in the navigation.
    - Enter your username and password to sign in.
    - Once signed in, you see navigation links for the homepage, the dashboard, and the option to log out.

4. Dashboard
    - Click on the "Dashboard" option in the navigation to view your existing blog posts and the option to add a new blog post.
    - You can also click on one of your existing posts to delete or update it.

5. Create a Blog Post
    - To add a new blog post, click the "Add a New Blog Post" button on the dashboard.
    - Enter a title and contents for your blog post, then click the "Create" button.
    - Your new blog post is saved, and you are taken back to an updated dashboard.

6. View Blog Post
    - Click on an existing blog post on the homepage or dashboard to view its details.
    -  You can see the post title, contents, post creator’s username, and date created.
    - You have the option to leave a comment.

7. Comment on Blog Post
    - Enter a comment and click the "Submit" button while signed in.
    - The comment is saved, and the post is updated to display the comment, the comment creator’s username, and the date created.
    
8. Logout
    - To sign out of the site, click on the "Logout" option in the navigation.    
    
To experience the application, visit the deployed Heroku website: [Tech Blog](https://text-editor-jalzu1007-1b3dad0681d3.herokuapp.com/)

## Credits

Third-Party Assets:

- https://developer.mozilla.org/en-US/docs/Glossary/MVC
- https://sequelize.org/docs/v6/core-concepts/model-basics/
- https://www.npmjs.com/package/express-handlebars
- https://www.npmjs.com/package/express-session
- https://www.npmjs.com/package/connect-session-sequelize
- https://expressjs.com/en/guide/using-middleware.html

## License

N/A