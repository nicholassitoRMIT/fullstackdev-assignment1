module.exports = (express, app) => {
    const controller = require("../controllers/movie.controller.js");
    const router = express.Router();
  
    // Select all movies.
    router.get("/", controller.all);
  
    // Get movie by name
    router.get("/get-name", controller.byName)

    // Add routes to server.
    app.use("/api/movies", router);
  };
  