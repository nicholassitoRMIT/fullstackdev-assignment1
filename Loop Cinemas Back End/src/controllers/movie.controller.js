const db = require("../database");

// Select all posts from the database.
exports.all = async (req, res) => {
  const movies = await db.movie.findAll();

  // Can use eager loading to join tables if needed, for example:
  // const posts = await db.post.findAll({ include: db.user });

  // Learn more about eager loading here: https://sequelize.org/master/manual/eager-loading.html

  res.json(movies);
};

// Create a post in the database.
exports.create = async (req, res) => {
  const movie = await db.movie.create({
    name: req.body.name,
    description: req.body.description
  });

  res.json(movie);
};