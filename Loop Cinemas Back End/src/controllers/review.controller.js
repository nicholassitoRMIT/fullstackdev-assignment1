const db = require("../database");

// Select all reviews from the database.
exports.all = async (req, res) => {
  const reviews = await db.reviews.findAll();

  res.json(reviews);
};

exports.byMovie = async(req, res) => {
  const reviews = await db.reviews.findAll({
    where: {
      movieID: req.body.movieID
    }
  })

  res.json(reviews)
}

exports.byMovieAndUser = async(req, res) => {
  const reviews = await db.reviews.findAll({
    where: {
      movieID: req.body.movieID,
      userEmail: req.json.email
    }
  })

  res.json(reviews)
}

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
