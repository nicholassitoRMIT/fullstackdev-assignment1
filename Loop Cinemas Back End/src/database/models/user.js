module.exports = (sequelize, DataTypes) =>
  //Model for the users.

  //Users have the following attributes:
  //email - primary key, since no two users can have the same e-mail
  //username - the user's name
  //password_hash - the user's password stored in a hash format
  sequelize.define("user", {
    email: {
      type: DataTypes.STRING(100),
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(100),
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
