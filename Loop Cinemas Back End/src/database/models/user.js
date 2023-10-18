module.exports = (sequelize, DataTypes) =>
  //Model for the users.

  //Users have the following attributes:
  //id - primary key
  //email - user email
  //username - the user's name
  //password_hash - the user's password stored in a hash format
  sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false
    },
    password_hash: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    //Include timestamps for account creation
    timestamps: true
  });
