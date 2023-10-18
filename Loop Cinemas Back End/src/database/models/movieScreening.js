module.exports = (sequelize, DataTypes) =>
  //Model for movie screenings.

  //Screenings have the following attributes:
  //id - primary key
  //dateTime - date and time of the screening
  //totalSeats - total number of seats
  //availableSeats - available seats to book
  //movieID - foreign key to reference movie
  
  sequelize.define("screening", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    dateTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    availableSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    // Don't add the timestamp attributes (updatedAt, createdAt).
    timestamps: false
  });
