import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import logo from "../images/logoproject.jpg";
import {useNavigate} from "react-router-dom";
import {Carousel} from "react-bootstrap";
import data from "./data";
import data2detail from './Data2detailedView'
import { styled } from '@mui/material/styles';
import {CardActions, Collapse, Grid} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import image1 from "../images_cards/hotelcard-1.jpg"
import image2 from "../images_cards/hotelcard-2.jpg"
import image3 from "../images_cards/hotelcard-3.jpg"
import image4 from "../images_cards/hotelcard-4.jpg"
import image5 from "../images_cards/hotelcard-5.jpg"
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import logo2 from "../images/profileicon.jpg"
import {hotelDetails,hotel_name,hotelServices,hotelFacilities} from "./AfterSearchFromHome";
import {isLoggedIn} from "../App";

var nav


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



const DetailedViewHotel = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    nav = useNavigate();
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="logo"/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto">
                        <li style={{cursor: 'pointer', marginLeft: "40px", fontFamily: 'monospace'}}
                            class="nav-item" onClick={() => {
                            nav("/detailedViewHotel")
                        }}>
                            {hotel_name}
                        </li>
                        <li style={{cursor: 'pointer', marginLeft: "40px", fontFamily: 'monospace'}}
                            class="nav-item" onClick={() => {
                            nav("/afterSearchFromHome")
                        }}>
                            Hotels
                        </li>
                        {/*<li style={{cursor: 'pointer', marginLeft: "40px", fontFamily: 'monospace'}}*/}
                        {/*    class="nav-item" onClick={() => {*/}
                        {/*    nav("/Servicehotel")*/}
                        {/*}}>*/}
                        {/*    Services*/}
                        {/*</li>*/}
                        <li style={{cursor: 'pointer', marginLeft: "40px", fontFamily: 'monospace'}}
                            class="nav-item" onClick={() => {
                                if(isLoggedIn){
                                    nav("/bookingDate")
                                }
                                else
                                {
                                    alert("you must sign in to book roomes")
                                    nav("/login");
                                }

                        }}>
                            Book
                        </li>


                    </ul>

                </div>
            </nav>


            <Carousel style={{height: "600px"}}>
                <Carousel.Item interval={1000}>
                    <img style={{height: "500px"}}
                         className="d-block w-100"
                         src="finalforsignup/img/hotelpic2.jpeg"
                         alt="First slide"

                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            <h4 style={{textAlign: "center", fontFamily: "Georgia, serif"}}>Featured Rooms</h4>
            <h1 style={{textAlign: "center", fontFamily: "Georgia, serif"}}>Rooms and Suites</h1>
            <Grid container spacing={4} padding={4}>
                {hotelDetails.map((item, index) => {
                    return (
                        <Grid item xs={12} md={4}>
                            <Card sx={{maxWidth: 345}} className="a" >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    src={item.image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.room_type}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        cost per night:{item.cost}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.available_rooms} rooms available
                                    </Typography>

                                </CardContent>
                                <CardActions>

                                    {/*<Button size="small">Book now</Button>*/}
                                </CardActions>
                            </Card>

                        </Grid>
                    )
                })}
            </Grid>
            <div style={{marginTop: "150px", background: "#d4ebf3"}}>
                <h3 style={{textAlign: "center", fontFamily: "Georgia, serif"}}>Services------</h3>
                <h1 style={{textAlign: "center", fontFamily: "Georgia, serif"}}>Facilities & Services</h1>

            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <h3 style={{marginLeft: "2%"}}>Hotel Services:</h3>
                <h3 style={{marginLeft: "38%"}}>Hotel Facilities:</h3>
            </div>

            <div className="columns cols_33" style={{display: "flex", flexDirection: "row"}}>
                <ul style={{fontFamily: "Georgia, serif"}}>
                {hotelServices.map((item)=>{
                    return (
                        <ul style={{fontFamily: "Georgia, serif"}}>
                        <li> {item.description} </li>
                            cost:{item.cost} tk
                    </ul>
                    )
                })}
                </ul>

                <ul style={{fontFamily: "Georgia, serif", marginLeft: "25%"}}>
                    {hotelFacilities.map((item)=>{
                        return (
                            <ul style={{fontFamily: "Georgia, serif"}}>
                                <li> {item.description} </li>
                            </ul>
                        )
                    })}
                </ul>
            </div>
            <Carousel style={{height: "600px"}}>
                <Carousel.Item>
                    <img style={{height: "500px"}}
                         className="d-block w-100"
                         src="https://firebasestorage.googleapis.com/v0/b/touron-c8928.appspot.com/o/Screenshot%20(385).png?alt=media&token=84c541cc-ac18-43df-8313-7f85984e9fca"
                         alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height: "500px"}}
                         className="d-block w-100"
                         src="https://firebasestorage.googleapis.com/v0/b/touron-c8928.appspot.com/o/Screenshot%20(385).png?alt=media&token=84c541cc-ac18-43df-8313-7f85984e9fca"
                         alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height: "500px"}}
                         className="d-block w-100"
                         src="https://firebasestorage.googleapis.com/v0/b/touron-c8928.appspot.com/o/Screenshot%20(385).png?alt=media&token=84c541cc-ac18-43df-8313-7f85984e9fca"
                         alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/*<div>*/}
            {/*    <h4 style={{textAlign: "center", fontFamily: "Georgia, serif"}}>Reviews________</h4>*/}
            {/*    <h1 style={{textAlign: "center", fontFamily: "Georgia, serif"}}>Guest Reviews</h1>*/}
            {/*    <Grid container spacing={4} padding={4}>*/}
            {/*        {hotelDeatils.map((item2, index) => {*/}
            {/*            return (*/}
            {/*                <Grid item xs={12} md={4}>*/}
            {/*                    <Card sx={{maxWidth: 345}} style={{background:"#c1c5c5"}}>*/}
            {/*                        <CardHeader*/}
            {/*                            avatar={*/}
            {/*                                <Avatar alt="Remy Sharp" src={item2.image}/>*/}
            {/*                            }*/}

            {/*                            title={item2.room_type}*/}
            {/*                            subheader={item2.header}*/}
            {/*                        />*/}

            {/*                        <CardContent>*/}
            {/*                            <Typography variant="body2" color="text.secondary">*/}
            {/*                                {item2.cost}*/}
            {/*                            </Typography>*/}
            {/*                        </CardContent>*/}

            {/*                    </Card>*/}
            {/*                </Grid>*/}
            {/*            )*/}
            {/*        })*/}
            {/*        }*/}


            {/*    </Grid>*/}



            {/*</div>*/}

        </>
    )


}
export default DetailedViewHotel