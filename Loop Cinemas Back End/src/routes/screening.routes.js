module.exports = (express, app) => {
    const controller = require("../controllers/screening.controller.js");
    const router = express.Router();
  
    // Select all posts.
    router.get("/", controller.all);
  
    // Create a new post.
    router.post("/", controller.create);
  
    // Add routes to server.
    app.use("/api/screenings", router);
  };
  