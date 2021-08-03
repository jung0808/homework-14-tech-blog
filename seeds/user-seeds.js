const { User } = require("../models");

const userData = [
  {
    username: "John Doe",
    password: "password12345",
  },
  {
    username: "Abraham Lincoln",
    password: "password12345",
  },
  {
    username: "Donald Trump",
    password: "password12345",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
