const { where } = require("sequelize");
const db = require("../database");

// Select all screenings from the database.
exports.all = async (req, res) => {
  const screenings = await db.screenings.findAll();

  res.json(screenings);
};

exports.byMovie = async (req, res) => {
  //Gets all screenings for a movie.

  const screenings = await db.screenings.findAll({
    where: {
      movieID: req.body.movieID
    }
  })

  res.json(screenings)
}

// Create a movie in the database.
exports.create = async (req, res) => {
  const screening = await db.screening.create({
    dateTime: req.body.dateTime,
    totalSeats: req.body.totalSeats,
    availableSeats: req.body.availableSeats,
    movieID: req.body.movieID
  });

  res.json(screening);
};