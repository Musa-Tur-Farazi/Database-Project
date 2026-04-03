
import React, {useEffect, useState} from "react";
import axios from "axios";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Redirect,
 useNavigate
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Services from "./components/Services";
import AfterLogin from "./components/AfterLogin";
import AfterSearchFromHome from "./components/AfterSearchFromHome";
import Booking from "./components/Booking";
import DetailedViewHotel from "./components/detailedViewHotel";
import AdminProfile from "./components/AdminProfile";
import BookingDate from "./components/BookingDate";
import PaymentMethod from "./components/PaymentMethod";
import AfterSubmitBooking from "./components/AfterSubmitBooking";
import CardPayment from "./components/CardPayment";
import AfterLoginAdmin from "./components/AfterLoginAdmin";
import AdminDrawer from "./components/AdminDrawer";
import FirstPageAdmin from "./components/FirstPageAdmin";
import ServiceTable from "./components/ServiceTable";
import Cookies from 'universal-cookie';
import UserDrawer from "./components/UserDrawer";
import UserProfile from "./components/UserProfile";
import DashboardBooking from "./components/DashboardBooking";
import ReservationList from "./components/ReservationList";
import VisitedPlaces from "./components/VisitedPlaces";

const cookies = new Cookies();

var navigate=null;
var nav;
var setLoginName;
var isLoggedIn;
var customer_id;
var mail;
var isAdmin;
var Setting
const App=()=>
{
    nav=useNavigate();
    const [loggedIn,setloggedIn]=useState(false)
    const [username,setUsername]=useState(null)
    const [cid,setCid]=useState(null)
    const [email,setMail]=useState(null)
    const [isadmin,setIsAdmin]=useState(false)
    isLoggedIn=loggedIn;
    setLoginName=username;
    customer_id=cid;
    mail=email;
    isAdmin=isadmin;

    Setting=(val,name,id,email,val2)=>{
        console.log("hello from setting")
       setloggedIn(val);
        setUsername(name);
        setCid(id);
        setMail(email);
        setIsAdmin(val2);

    }
    /*
    cookies.remove('token',{ path: '/' })
    */
     useEffect(()=>{
         if(cookies.get('user')!=undefined && cookies.get('user')!=null){
             var User=cookies.get('user');
             if(isAdmin) {
                 Setting(true, User.username, User.user_id, User.email, true)
             }
          else {
                 Setting(true, User.username, User.user_id, User.email, false)
             }
             console.log(cookies.get('user'))
         }
             },[])
    //[status2,Setting]=useState(false)
    // var nav2=useNavigate();
    // nav=(name)=>{
    //     console.log("inside nav");
    //     nav2(name)
    // }
    //
    // const [isAuth,setAuth]=useState(false)
    // status2=isAuth
    // Setting=setAuth
    //
    // useEffect(()=>{
    //     console.log(isAuth)
    //     //if(isAuth)nav('/home')
    //     //else nav('/login')
    // },[isAuth])

    // const[username,setUsername]=useState(null);
    // setLoginName=setUsername

  return(
    <>
       <Routes>
        {/*   <Route element={ <Navbar/> } />*/}
        {/* <Route exact path="/" element={ <Home/> } />*/}
        {/* <Route exact path="/home" element={ <Home/> } />*/}
        {/* <Route exact path="/about" element={ <About/>} />*/}
        {/* <Route exact path="/login" element={<Login/>} />*/}
        {/*<Route exact path="/contact" element={<Contact/>} />*/}
        {/*<Route exact path="/signup" element={<Signup/>} /> */}
        {/*<Route exact path="/services" element={<Services/>} />*/}
        {/*   <Route exact path="/afterlogin" element={<AfterLogin/>}/>*/}
        {/*   <Route exact path="/afterSearchFromHome" element={<AfterSearchFromHome/>}/>*/}
           {/*<Route exact path="/specificHotelSearch" element={<SpecificHotelSearch/>}/>*/}
           <Route element={ <Navbar/> } />
           <Route exact path="/" element={ <Home/> } />
           <Route exact path="/home" element={ <Home/> } />
           <Route exact path="/about" element={ <About/>} />
           <Route exact path="/login" element={<Login/>} />
           <Route exact path="/contact" element={<Contact/>} />
           <Route exact path="/signup" element={<Signup/>} />
           <Route exact path="/services" element={<Services/>} />
           <Route exact path="/afterlogin" element={<AfterLogin/>}/>
           <Route exact path="/afterSearchFromHome" element={<AfterSearchFromHome/>}/>
           {/*<Route exact path="/HotelName" element={<HotelNamesList/>}/>*/}
           <Route exact path="/Rooms" element={<AfterSearchFromHome/>}/>
           {/*<Route exact path="/Servicehotel" element={<ServiceDetailedViewHotel/>}/>*/}
           <Route exact path="/Book" element={<Booking/>}/>
           <Route exact path="/detailedViewHotel" element={<DetailedViewHotel/>}/>
           {/*<Route exact path="/admin" element={<AdminProfile/>}/>*/}
           <Route exact path="/afterbookingbutton" element={<AfterSubmitBooking/>}/>
           {/*<Route exact path="/userprofile" element={userProfile()}/>*/}
           <Route exact path="/bookingDate" element={<BookingDate/>}/>
           <Route exact path="/payMethod" element={<PaymentMethod/>}/>
           <Route exact path="/cardPayment" element={<CardPayment/>}/>
           <Route exact path="/afteradminlogin" element={<AfterLoginAdmin/>}/>
           <Route exact path="/admindrawer" element={<AdminDrawer/>}/>
           <Route exact path="/adminprofile" element={<AdminProfile/>}/>
           <Route exact path="/firstpageofadmin" element={<FirstPageAdmin/>}/>
           <Route exact path="/servicetable" element={<ServiceTable/>}/>
           <Route exact path="/userDrawer" element={<UserDrawer/>}/>
           <Route exact path="/userprofile" element={<UserProfile/>}/>
           <Route exact path="/prebooking" element={<DashboardBooking/>}/>
           <Route exact path="/reservationlist" element={<ReservationList/>}/>
           <Route exact path="/visitedplaces" element={<VisitedPlaces/>}/>
           {/*
           <Route exact path="/dashboardBooking" element={<Dashboardbookings/>}/>

           <Route exact path="/dashboardwallet" element={<Dashboardwallet/>}/>*/}
        
       
         </Routes>



    {/* <Route path="/">
      <Home/>
    </Route>
    <Route path="/about">
      <About/>
    </Route>
    <Route path="/contact">
      <Contact/>
    </Route>
    <Route path="/login">
      <Login/>
    </Route>
    <Route path="/signup">
      <Signup/>
    </Route>   */}
    
    </>
  )
}

export default App;
export {navigate,nav,setLoginName,isLoggedIn,Setting,customer_id,mail,isAdmin}