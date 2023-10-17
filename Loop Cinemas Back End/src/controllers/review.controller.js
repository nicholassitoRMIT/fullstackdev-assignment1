const db = require("../database");

// Select all posts from the database.
exports.all = async (req, res) => {
  const reviews = await db.reviews.findAll();

  // Can use eager loading to join tables if needed, for example:
  // const posts = await db.post.findAll({ include: db.user });

  // Learn more about eager loading here: https://sequelize.org/master/manual/eager-loading.html

  res.json(reviews);
};

// Create a post in the database.
exports.create = async (req, res) => {
  const review = await db.review.create({
    rating: req.body.rating,
    text: req.body.text,
    userEmail: req.body.userEmail,
    movieID: req.body.movieID
  });

  res.json(review);
};
