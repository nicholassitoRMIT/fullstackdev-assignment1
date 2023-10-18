module.exports = (sequelize, DataTypes) =>
  //Model for reviews.
  //Reviews have the following attributes:

  //id - primary key
  //rating - star rating, from 1 - 5
  //text - review text
  //userEmail - foreign key to reference user
  //movieID - foreign key to reference movie
  sequelize.define("review", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    // Don't add the timestamp attributes (updatedAt, createdAt).
    timestamps: true
  });