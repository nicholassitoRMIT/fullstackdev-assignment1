const { Sequelize, DataTypes } = require("sequelize");
const config = require("./config.js");

const db = {
  Op: Sequelize.Op
};

// Create Sequelize.
db.sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.DIALECT
});

// Include models.
db.user = require("./models/user.js")(db.sequelize, DataTypes)
db.movie = require("./models/movie.js")(db.sequelize, DataTypes)
db.screening = require("./models/movieScreening.js")(db.sequelize, DataTypes)
db.review = require("./models/review.js")(db.sequelize, DataTypes)

// Associate tables with each other.

//The reviews table is associated with both users and movies,
//and the screenings table is associated with movies.
db.user.belongsToMany(db.movie, {through: db.review})
db.movie.belongsToMany(db.user, {through: db.review})
db.screening.belongsTo(db.movie, { foreignKey: {name: "movieID", allowNull: false}})

// Include a sync option with seed data logic included.
db.sync = async () => {
  // Sync schema.
  await db.sequelize.sync();

  // Can sync with force if the schema has become out of date - note that syncing with force is a destructive operation.
  // await db.sequelize.sync({ force: true });
  
  await seedData();
};

async function seedData() {
  var count = await db.user.count();

  // Only seed data if necessary.
  if(count == 0){
    const argon2 = require("argon2");

    let hash = await argon2.hash("asd123", { type: argon2.argon2id });
    await db.user.create({ email: "faker@gmail.com", username: "joanmario", password_hash: hash });
  }
  
  count = await db.movie.count();

  if(count == 0){
    await db.movie.create({ name: "Cream Unicorn Cookie Movie", description: "woah cream unicorn cookie movie real!1"})
    await db.movie.create({ name: "Very engaging drama", description: "this movie will live in your head rent free for the next 25 years"})

    await db.movie.create({ name: "Champion's run", description: "The Louisiana Cubs are a failing baseball team, but a new coach with devilish training programmes and creative strategies was scouted to assist them for the season. Will this new coach lead them to victory, or will he be their downfall?"})
    await db.movie.create({name: "Crossroads", description: "\"Will you walk down a path with no end?\" Max Maxington is a special ops agent given two choices- fight for his country, or fight for what he believes in."})
    await db.movie.create({name: "Dance Dance Revolution", description: "Members of a dance troupe from South Dakota tour around the country, and along the way they rekindle their burning passion for their craft."})
    await db.movie.create({name: "Kickout", description: "Two teams, One winner. FC Bartolomeo and Running Mazeno are the two titans of the International Football Association, and have pried their way up to face off against each other in the Grand Finals. This movie is inspired by real events."})
    await db.movie.create({name: "The Climber", description: "A riveting tale about John Mountain, a man whose life goal is to scale the tallest mountains in the world, and his trials and tribulations in attempting to climb Mount Everest."})
    await db.movie.create({name: "The Skiier", description: "Willis Wilkinson, a pro skiier, tore his ACL in a tournament 5 years ago. Will he manage to rebuild his career, or will he be forced to quit the sport?"})
  }
  
}

module.exports = db;
