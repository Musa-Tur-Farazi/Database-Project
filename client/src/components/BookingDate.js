import React, {useState} from "react";
import {Carousel} from "react-bootstrap";
import image3 from "../images_cards/hotelcard-3.jpg";
import image4 from "../images_cards/hotelcard-4.jpg";
import image from "../images/giphy.gif";
import  image2 from "../images/gif2.gif";
import Box from "@mui/material/Box";
import "../CSSfolder/carosol.css"
import {Button, TextField} from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import countries from "i18n-iso-countries";
import axios from "axios";
import {check_indate,check_outDate} from "./Home";
import {nav} from "../App";
const BookingDate=()=>
{
    const [name, setName] = React.useState('Cat in the Hat');
    const handleChange = (event) => {
        setName(event.target.value);
    };
    const [date,setDate]=useState(new Date());
    const handleFactoryDateChange = (newValue) => {

        setDate(newValue);
    };
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange=(date)=>
    {
        setSelectedDate(date);

    };
    const [date2,setDate2]=useState(new Date());
    const handleFactoryDateChange2 = (newValue2) => {

        setDate2(newValue2);
    };

    const buttonclick=async ()=>
    {

        nav('/Book')
    }

    return(
        <div>
            <Carousel  style={{height: "600px"}}>
                <Carousel.Item>
                    <img style={{height: "400px"}}
                         className="d-block w-100"
                         src={image}
                         alt="First slide"
                    />

                </Carousel.Item>
            </Carousel>
            <div>
                <h2 style={{textAlign:"center",fontFamily:"fantasy",marginLeft:"1%",marginBottom:"5%"}}>Details Info</h2>
                <Box
                    style={{marginLeft:"45%"}}
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-name"
                        label="Check in"
                        defaultValue={check_indate}
                        onChange={handleChange}
                    />
                    <br/>
                    <TextField
                        id="outlined-uncontrolled"
                        label="CheckOut"
                        defaultValue={check_outDate}
                    />
                    <br/>
                    <Button color="secondary" style={{margin:"2%",color:"black",background:"#cbe0e0"}} onClick={()=>{buttonclick()}} >Proceed</Button>
                </Box>

            </div>
            <Carousel style={{height: "600px"}}>
                <Carousel.Item>
                    <img style={{height: "600px"}}
                         className="d-block w-100"
                         src={image2}
                         alt="First slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>

    )
}
export default BookingDate