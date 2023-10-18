module.exports = (express, app) => {
    const controller = require("../controllers/review.controller.js");
    const router = express.Router();
  
    // Select all posts.
    router.get("/", controller.all);
  
    // Create a new post.
    router.post("/create", controller.create);

    router.get("/for-movie", controller.byMovie)

    router.get("/by-user", controller.byMovieAndUser)

    router.patch("/edit", controller.edit)

    router.delete("/delete", controller.delete)
  
    // Add routes to server.
    app.use("/api/reviews", router);
  };