import  React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSSfolder/payment.css';
import {Button, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Form from 'react-bootstrap/Form'
import {useState} from "react";
import logo from "../images/logoproject.jpg";
import {mail, nav, Setting} from "../App";
import axios from "axios";
import {check_indate, check_outDate, duration} from "./Home";
import {hotel_id, hotel_name, hotelDetails, hotelFacilities, hotelServices} from "./AfterSearchFromHome";
import {customer_id} from "../App";
import {roomQuantity,serviceQuantity} from "./Booking";
import {rooms,services,cost} from "./AfterSubmitBooking";
import Cookies from "universal-cookie";


var media;
const cookies = new Cookies();

const PaymentMethod = () => {
    console.log("its showing");
    const setMedia=async (val)=>{
        media=val;
    }
    const click=async ()=>
    {
        console.log(media)
        console.log(check_outDate);
        var num=document.getElementById("number").value;
        try{

            var res=await  axios.post('http://localhost:8080/booking',{
                hotelRooms:hotelDetails,
                hotel_id:hotel_id,
                check_indate:check_indate,
                check_outDate:check_outDate,
                duration:duration,
                customer_id:customer_id,
                mail:mail,
                booked_rooms:rooms,
                services:services,
                payMethod:media,
                payNumber:num,
                cost:cost
            })
            if(res.data.status=="success")
            {
                console.log("yayyyyyy");
                alert("succesfully booked");
            }
        }
        catch(e){
            console.log(e);
        }
    }

    return(

        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo"/>
                </a>
                {/*<button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
*/}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li style={{cursor: 'pointer', marginLeft: "40px", fontFamily: 'monospace'}}
                            className="nav-item" onClick={() => {
                            nav("/home")
                        }}>
                            Home
                        </li>
                        <li style={{cursor: 'pointer', marginLeft: "40px", fontFamily: 'monospace'}}
                            className="nav-item" onClick={()=>{
                            cookies.remove('user',{ path: '/' })
                            Setting(false,null,null,null);
                            nav("/home")
                        }}>
                            Logout
                        </li>

                    </ul>

                </div>
            </nav>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <p style={{textAlign:"center",fontFamily:"fantasy",marginTop:"3%"}}>Enter Phone Number</p>
                    <input type="text" placeholder="Enter phone number" style={{width:"50%",marginLeft:"25%",textAlign:"center",background:"white"}} id="number"/>
                    <p style={{textAlign:"center",fontFamily:"fantasy",marginTop:"1%"}}>Service Provider</p>
                    <Form.Select aria-label="Default select example" style={{width:"50%",marginLeft:"25%",textAlign:"center"}} onChange={e => {
                        console.log("e.target.value", e.target.value);
                        setMedia(e.target.value);
                    }}>

                        <option value="bkash">Bkas</option>
                        <option value="nogod">Nogod</option>
                        <option value="rocket">Rocket</option>
                    </Form.Select>
                    <TextField style={{width:"50%",marginLeft:"25%",textAlign:"center",marginTop:"5%",fontFamily:"fantasy"}}
                               id="outlined-read-only-input"
                               label="Read Only"
                               defaultValue={cost}
                               InputProps={{
                                   readOnly: true,
                               }}
                    />
                    <Button variant="contained" color="success" style={{width:"50%",marginLeft:"25%",textAlign:"center",marginTop:"2%"}} onClick={()=>{click()}}>
                        Proceed
                    </Button>
                    <Button variant="contained"  style={{width:"50%",marginLeft:"25%",textAlign:"center",marginTop:"2%",background:"#483248"}}
                            onClick={() => {
                                nav("/afterbookingbutton")
                            }}>
                        Go Back
                    </Button>
                </div>
            </Box>
        </div>

    );

}
export  default PaymentMethod;