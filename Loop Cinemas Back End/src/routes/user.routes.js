module.exports = (express, app) => {
  const controller = require("../controllers/user.controller.js");
  const router = express.Router();

  // Select all users.
  router.get("/", controller.all);

  // Select a single user with id.
  router.get("/select/:id", controller.one);

  // Select one user from the database if username and password are a match.
  router.get("/login", controller.login);

  //Register a new user.
  router.post("/register", controller.register)

  //
  router.get("/verify-password", controller.verifyPassword)

  //Change a user's name
  router.patch("/change-name", controller.changeName)

  //Change a user's password
  router.patch("/change-password", controller.changePassword)

  //Change a user's email
  router.patch("/change-email", controller.changeEmail)

  // Add routes to server.
  app.use("/api/users", router);
};
