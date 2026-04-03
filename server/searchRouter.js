const express = require("express");
const app = express();

const session = require("express-session");
const bodyParser = require("body-parser");
const router = require("express").Router();
const SearchController = require("./searchController");

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const searchController = new SearchController();
router.post("/address", searchController.address);
app.use(router);
app.listen(3000);
module.exports = router;

// const router = require('express').Router()
// const AuthController=require('../../controller/authController')
// const adminMiddleWare=require('../../services/adminValidation')

// const authController=new AuthController()
// //any user can sign up here(admin,staff,buyer)
// router.post('/signup',authController.signup)
// //any user can sign in here(admin,staff,buyer)
// router.post('/signin',authController.signin)
// //any user can reset password  here(admin,staff,buyer)
// router.post('/resetPass',authController.resetPassword)

// //these part only for admins
// router.get('/getStaffs',adminMiddleWare,authController.getEmployees)//admin can see all staffs
// router.post('/addStaff',adminMiddleWare,authController.addStaff)//admin can see all staffs
// router.delete('/delete/:id',adminMiddleWare,authController.delete)//admin can delete any staff


