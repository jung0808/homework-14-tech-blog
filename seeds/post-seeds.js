const { Post } = require("../models");

const postData = [
  {
    title: "Sequelize",
    content:
      "Models are the essence of Sequelize. A model is an abstraction that represents a table in your database. In Sequelize, it is a class that extends Model. The model tells Sequelize several things about the entity it represents, such as the name of the table in the database and which columns it has (and their data types).",
    user_id: 1,
  },
  {
    title: "Handlebars",
    content:
      "Handlebars is a simple templating language. It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular text with embedded Handlebars expressions.",
    user_id: 2,
  },
  {
    title: "Express.js",
    content:
      "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
