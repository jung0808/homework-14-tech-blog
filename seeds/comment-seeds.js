const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Good job! Nice work!!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "This is fantastic! I'm so proud of you!",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "Coding bootcamp is finally over!! Yay!!",
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
