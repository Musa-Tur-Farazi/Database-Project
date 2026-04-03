const express = require("express");
const app = express();
var cookieParser = require("cookie-parser")
const session = require("express-session");
const bodyParser = require("body-parser");
const router = require("express").Router();
const cors = require("cors");

const AuthController=require('./Authentication/authController')
const authController=new AuthController()

const SearchController=require('./Searching/searchController')
const searchController=new SearchController()

const HotelSearchController=require('./Searching/hotelSearchController')
const hotelSearchController=new HotelSearchController()


const AdminController=require('./Admin/adminController')
const adminController=new AdminController()

const UserController = require("./User/userController");
const userController=new UserController()

const BookController=require('./Booking/BookController');
const bookController=new BookController()
app.use(cookieParser())
app.use(
    session({
        secret: "secret",
        resave: true,
        cookie: { maxAge: 8*60*60*1000 },
        saveUninitialized: true,
    })
);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.post("/register", authController.register);
router.post("/loginadmin", authController.loginadmin);
router.post("/contact", authController.contact);
router.post("/loginuser", authController.loginuser);


router.post("/address",searchController.address);
router.post("/hotelDetail",hotelSearchController.hotelDetail);
router.post("/toprated",searchController.toprated);

router.post("/booking",bookController.booking);
router.post("/adminhotel",adminController.adminFirstPage);
router.post("/adminhoteldetails",adminController.adminHotelDetails);
router.post("/adminRoomTypeUpdate",adminController.updateType);
router.post("/adminRoomTypeAdd",adminController.addType);
router.post("/adminRoomAdd",adminController.addRoom);
router.post("/adminRoomDelete",adminController.discardRoom);
router.post("/adminservicedetails",adminController.adminService);
router.post("/adminfreeServiceAdd",adminController.freeAdd);
router.post("/adminServiceDelete",adminController.deleteService);
router.post("/adminpaidServiceAdd",adminController.paidAdd);
router.post("/adminupdateServiceUpdate",adminController.updateservice);
router.post("/adminprofile",adminController.profileUpdate);
router.post("/reservation",adminController.reservation);
router.post("/userprofile",userController.profileUpdate);
router.post("/prebooking",userController.preBooking);
router.post("/futurebooking",userController.futureBooking);
app.use(router);

const port=process.env.PORT || 8080 ;


app.listen(port, () => {
    console.log(`App listening at port : ${port}`)
})
module.exports = router;



