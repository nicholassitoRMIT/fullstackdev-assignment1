const db = require("../database");
const argon2 = require("argon2");

//This code has been adapted from the week 8 lab.

// Select all users from the database.
exports.all = async (req, res) => {
  const users = await db.user.findAll();

  res.json(users);
};

// Select one user from the database.
exports.one = async (req, res) => {
  const user = await db.user.findByPk(req.params.id);

  res.json(user);
};

// Select one user from the database if username and password are a match.
exports.login = async (req, res) => {
  const email = req.query.email
  const password = req.query.password

  const user = await db.user.findOne({where: {email: email}});
  console.log(user)

  if(user === null || await argon2.verify(user.password_hash, password) === false)
    // Login failed.
    res.json(null);
  else
    res.json(user);
};


exports.register = async (req, res) => {
  //Register a user in the database.
  const email = req.body.email
  const username = req.body.username
  const password = req.body.password
  const hash = await argon2.hash(password)

  //Before we register a user, we must make sure
  //they aren't trying to register with another account's e-mail.

  //To do that, try to get an account with the e-mail.
  const existingEmail = await db.user.findOne({where: {email: email}});
  const existingUsername = await db.user.findOne({where: {username: username}});

  if(existingEmail !== null || existingUsername || null){
    //There is already a user with the e-mail, so return null.
    res.json(null)
  } 
  else {
    //The e-mail is available, so we register the user.
    const user = await db.user.create({
      email: email,
      username: username,
      password_hash: hash
    });

    res.json(user);
  }
};

exports.verifyPassword = async (req, res) => {
  console.log(req)
  const password = req.query.password
  const user = await db.user.findByPk(req.query.id);

  if(await argon2.verify(user.password_hash, password) === false){
    // Password verification failed.
    res.json(null);
  }
  else {
    res.json(user);
  }
}

exports.changeName = async (req, res) => {
  const username = req.body.username
  const id = req.body.id

  const existingUsername = await db.user.findOne({where: {username: username}});

  if(existingUsername !== null){
    res.json(null)
  }
  else {
    const thisUser = await db.user.findByPk(id)
    await thisUser.update({username: username})
    res.json(thisUser)
  }
}

exports.changeEmail = async (req, res) => {
  const email = req.body.email
  const id = req.body.id

  const existingEmail = await db.user.findOne({where: {email: email}});

  if(existingEmail !== null){
    res.json(null)
  }
  else {
    const thisUser = await db.user.findByPk(id)
    await thisUser.update({email: email})
    res.json(thisUser)
  }
}

exports.changePassword = async (req, res) => {

}
