module.exports = (sequelize, DataTypes) =>
  //Movie model.

  //The movies have the following attributes:
  //id - primary key
  //name - name of the movie
  //description - movie description
  
  sequelize.define("movie", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    }
  }, {
    // Don't add the timestamp attributes (updatedAt, createdAt).
    timestamps: false
  });
