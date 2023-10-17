const db = require("../database");

// Select all posts from the database.
exports.all = async (req, res) => {
  const screenings = await db.screenings.findAll();

  // Can use eager loading to join tables if needed, for example:
  // const posts = await db.post.findAll({ include: db.user });

  // Learn more about eager loading here: https://sequelize.org/master/manual/eager-loading.html

  res.json(screenings);
};

// Create a post in the database.
exports.create = async (req, res) => {
  const screening = await db.screening.create({
    dateTime: req.body.dateTime,
    totalSeats: req.body.totalSeats,
    availableSeats: req.body.availableSeats,
    movieID: req.body.movieID
  });

  res.json(post);
};