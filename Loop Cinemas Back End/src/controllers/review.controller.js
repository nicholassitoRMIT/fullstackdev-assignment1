const db = require("../database");

// Select all reviews from the database.
exports.all = async (req, res) => {
  const reviews = await db.review.findAll();

  res.json(reviews);
};

exports.byMovie = async(req, res) => {
  const movieID = req.query.movieID

  const reviews = await db.review.findAll({where: {movieId: movieID}})
  res.json(reviews)
}

exports.byMovieAndUser = async(req, res) => {
  const review = await db.review.findOne({
    where: {
      movieId: req.query.movieID,
      userId: req.query.userID
    }
  })

  res.json(review)
}

exports.edit = async (req, res) => {
  const rating = req.body.rating
  const text = req.body.text

  const currentReview = await db.review.findOne({
    where: {
      movieId: req.body.movieID,
      userId: req.body.userID
    }
  })

  await currentReview.update({text: text, rating: rating})

  res.json(currentReview)
}

// Create a post in the database.
exports.create = async (req, res) => {
  const review = await db.review.create({
    rating: req.body.rating,
    text: req.body.text,
    userId: req.body.userID,
    movieId: req.body.movieID
  });

  res.json(review);
};

exports.delete = async (req, res) => {
  const currentReview = await db.review.findOne({
    where: {
      movieId: req.query.movieID,
      userId: req.query.userID
    }
  })

  await currentReview.destroy()

  res.json(null)
}
