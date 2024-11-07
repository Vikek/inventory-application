const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

usersRouter.get("/", (req, res) => {
    res.render("index");
});

usersRouter.get("/categories", (req, res) => {
    res.render("categories");
});

module.exports = usersRouter;