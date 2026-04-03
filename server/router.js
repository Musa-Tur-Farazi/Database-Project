const express = require("express");
const app = express();

const session = require("express-session");
const bodyParser = require("body-parser");
const router = require("express").Router();
const AuthController = require("./authController");
const cors = require("cors");

app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
    })
);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const authController = new AuthController();
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/", authController.start);
app.use(router);

app.listen(8080);
module.exports = router;


