import React, {useEffect} from 'react'
import Navbar from './Navbar'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import {Carousel} from "react-bootstrap";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import image1 from "../images_cards/hotelcard-1.jpg"
import image2 from "../images_cards/hotelcard-2.jpg"
import image3 from "../images_cards/hotelcard-3.jpg"
import image4 from "../images_cards/hotelcard-4.jpg"
import image5 from "../images_cards/hotelcard-5.jpg"
import {Button, Grid, Rating, TextField} from "@mui/material";
import { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";
import countries from "i18n-iso-countries";
import {
    usePopupState,
    bindTrigger,
    bindMenu,
} from 'material-ui-popup-state/hooks'
// Import the languages you want to use
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";

import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import {SearchOutlined} from "@mui/icons-material";
import {customer_id, nav, Setting} from "../App";
import axios from "axios";
import {prebookings} from "./Login";
import {hotel_name, hotelDeatils, hotelFacilities, hotelServices, setter} from "./AfterSearchFromHome";

var nearByHotels=[];
var check_indate,check_outDate,duration;
var prebooking=[];
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
const click =async(hotel_id,Hotel_name) => {
    try{

        var res=await  axios.post('http://localhost:8080/hotelDetail',{
            hotel_id:hotel_id,
            name:Hotel_name,
            check_indate:check_indate,
            check_outDate:check_outDate
        })
        var hotelDeatils=[];
       var  hotelFacilities=[];
        for (var r in res.data.rooms){
            var row=res.data.rooms[r]; // row is the json object
            hotelDeatils.push(row);
            console.log(row.hotel_name);
        }
        var hotelServices=[];
        for (var r in res.data.service){
            var row=res.data.service[r]; // row is the json object
            if(row.cost)hotelServices.push(row);
            else hotelFacilities.push(row);
            console.log("hiiiiiiiiiii desc:"+row.description);
        }
        console.log(res.data.status==="success");
        if(res.data.status==="success") {
            console.log("inside if")
            setter(hotel_id,Hotel_name,hotelDeatils,hotelFacilities,hotelServices)
            nav('/detailedViewHotel')
        }
    }
    catch(e){
        console.log(e);
    }

}
const Home= () =>{
    const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [value, setValue] = React.useState(0);
    const [expanded, setExpanded] = React.useState(false);
    const [date,setDate]=useState(new Date());
    const handleFactoryDateChange = (newValue) => {

        setDate(newValue);
    };



    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [selectedCountry, setSelectedCountry] = useState("");

    const selectCountryHandler = (value) => setSelectedCountry(value);

    // Have to register the languages you want to use
    countries.registerLocale(enLocale);
    countries.registerLocale(itLocale);

    // Returns an object not a list
    const countryObj = countries.getNames("en", { select: "official" });

    const countryArr = Object.entries(countryObj).map(([key, value]) => {
        return {
            label: value,
            value: key
        };
    });

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange=(date)=>
    {
        setSelectedDate(date);

    };
    const [date2,setDate2]=useState(new Date());
    const handleFactoryDateChange2 = (newValue2) => {

        setDate2(newValue2);
    };

    const [toprated,settoprated]=useState([]);
    useEffect(async()=>{
        try{
            console.log("in toprated");
            var res=await axios.post('http://localhost:8080/toprated',{
                name:"farazi"
            })
            console.log(res.data.hotels);
            settoprated(res.data.hotels);

        }
        catch(e){
            console.log(e);
        }
    },[])
    const buttonclick=async ()=>
    {
        console.log("testing date");
        console.log(date.getMonth());
        check_indate=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
        check_outDate=date2.getDate()+"/"+(date2.getMonth()+1)+"/"+date2.getFullYear();
        duration=(date2.getFullYear())*365+((date2.getMonth()+1)*30)+date2.getDate();
        duration-=((date.getFullYear())*365+((date.getMonth()+1)*30)+date.getDate());
        duration+=1;
        console.log("testing date:"+check_outDate);
        var place =document.getElementById("address").value;
        try{

            var res=await  axios.post('http://localhost:8080/address',{
                place:place
            })
            nearByHotels=[];
            for (var r in res.data.hotels){
                var row=res.data.hotels[r]; // row is the json object
                nearByHotels.push(row);
                console.log(row.hotel_name);
            }
            console.log(res.data.status==="success");
            if(res.data.status==="success") {
                console.log("inside if")
                nav('/afterSearchFromHome')
            }
        }
        catch(e){
            console.log(e);
        }

    }

    return(
        <div className="custom-background-home">
            <Navbar/>

            <div style={{display:"flex",
                flexDirection:"row"}} >
                <input type="text" placeholder="Search for destination" id="address"/>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        value={date}
                        onChange={handleFactoryDateChange}
                        label="Arrival date"
                        inputFormat="dd/MM/yyyy"

                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        value={date2}
                        onChange={handleFactoryDateChange2}
                        label="Checkout Date"
                        inputFormat="dd/MM/yyyy"
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <Button variant="contained" style={{background:"transparent",color:"black"}} onClick={()=>{buttonclick()}}>Search
                    </Button>



            </div>


            <div>
                <Carousel style={{height:"600px"}}>
                    <Carousel.Item interval={1000} >
                        <img style={{height:"500px"}}
                            className="d-block w-100"
                            src="finalforsignup/img/hotelpic2.jpeg"
                            alt="First slide"

                        />
                        <Carousel.Caption>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img style={{height:"500px"}}
                            className="d-block w-100"
                            src="finalforsignup/img/hotelpic3.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img style={{height:"500px"}}
                            className="d-block w-100"
                            src="finalforsignup/img/hotelpic4.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div>
                    <h3 style={{height:"40%"}}>Top Rated</h3>
                    <Grid  container spacing={4} padding={4} >
                        {toprated.map((item,index)=>
                        {
                            return(
                                <Grid item xs={12} md={4}>
                                    <Card sx={{ maxWidth: 500 }}  onClick={()=>{click(item.hotel_id,item.hotel_name)}} >
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            src={item.image}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.hotel_name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.address}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.rating}
                                            </Typography>
                                        </CardContent>
                                    </Card>

                                </Grid>
                            )
                        })}



                    </Grid>
                </div>

            </div>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>

    )
}

export default Home
export {nearByHotels,check_outDate,check_indate,duration,prebooking}