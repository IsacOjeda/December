const JokesController = require("../controllers/joke.controller")

module.exports = (app) => {
    app.get("/api/jokes", JokesController.findAllJokes);
    app.get("/api/jokes/:id", JokesController.findOneJoke);
    app.post("/api/jokes/new", JokesController.create);
    app.patch("/api/jokes/:id", JokesController.updateJoke)
    app.delete("/api/jokes/:id", JokesController.deleteJoke)

}