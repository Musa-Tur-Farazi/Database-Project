import React from 'react'
import {Button, CardActions, Grid, TextField} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from "@mui/icons-material/Logout";
import data from "./data";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {adminHotel} from "./Navbar";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {customer_id, Setting} from "../App";
import Cookies from "universal-cookie";
var nav;
var room_typeUpdate=[];
var room_idUpdate=[];
var free_service=[];
var paid_service=[];
var reservationlist=[];
var hotel_id;
var adminHotelName;

const cookies = new Cookies();
const FirstPageAdmin=()=>
{
    nav=useNavigate();
    const click=async(Hotel_id,name)=>{
        adminHotelName=name;
        hotel_id=Hotel_id;
        try{

            var res=await  axios.post('http://localhost:8080/adminhoteldetails',{
                hotel_id:hotel_id
            })
            room_typeUpdate=[];
             room_idUpdate=[];
             for(var r in res.data.data1){
                 var row=res.data.data1[r];
                 room_typeUpdate.push({Room_type:row.ROOM_TYPE,Cost:row.COST_PER_NIGHT,image:row.IMAGE});
             }
            for(var r in res.data.data2){
                var row=res.data.data2[r];
                room_idUpdate.push({Room_type:row.ROOM_TYPE,Room_id:row.ROOM_ID});
            }

        }
        catch(e){
            console.log(e);
        }
        try{

            var res=await  axios.post('http://localhost:8080/adminservicedetails',{
                hotel_id:hotel_id
            })
             free_service=[];
             paid_service=[];
             console.log("in first page service");
             console.log(res.data);
            for(var r in res.data.data1){
                var row=res.data.data1[r];
                free_service.push({Description:row.DESCRIPTION});
            }
            for(var r in res.data.data2){
                var row=res.data.data2[r];
                paid_service.push({Description:row.DESCRIPTION,Cost:row.COST});
            }


        }
        catch(e){
            console.log(e);
        }
        try{

            var res=await  axios.post('http://localhost:8080/reservation',{
                hotel_id:hotel_id
            })
            reservationlist=[];
            for(var r in res.data.data){
                var row=res.data.data[r];
                reservationlist.push({Booking_id:row.BOOKING_ID,customer:row.CUSTOMER_ID,Arrival_date:row.CHECK_INDATE,Departure_date:row.CHECK_OUTDATE,Charged_Amount:row.AMMOUNT});
            }

        }
        catch(e){
            console.log(e);
        }

        nav("/afteradminlogin")
    }
    return(
        <div >

            <Button style={{width:"30%",marginLeft:"35%",marginTop:"5%",fontFamily:"system-ui",background:"purple",color:"white"}} variant="outlined" startIcon={<LogoutIcon />}
            onClick={()=>{
                cookies.remove('user',{ path: '/' })
                Setting(false,null,null,null);
                nav("/home")
            }}
            >
                LogOut
            </Button>
            <br/>
            <TextField
                id="outlined-read-only-input"
                label="Read Only"
                defaultValue="You are admin of these following hotels"
                InputProps={{
                    readOnly: true,
                }}
                style={{width:"30%",marginLeft:"35%",fontFamily:"system-ui",marginTop:"1%",fontWeight:"bold"}}
            />


            <Grid  container spacing={4} padding={4} >
                {adminHotel.map((item,index)=>
                {
                    return(
                        <Grid item xs={12} md={4}>
                            <Card sx={{ maxWidth: 345 }} className="a" onClick={()=>{click(item.hotel_id,item.name)}} >
                                <CardMedia
                                    component="img"
                                    height="140"
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
                                <CardActions>

                                    <Button size="small" >SEE more</Button>
                                </CardActions>
                            </Card>

                        </Grid>
                    )
                })}
            </Grid>



        </div>
    )
}
export default FirstPageAdmin
export {room_idUpdate,room_typeUpdate,hotel_id,free_service,paid_service,adminHotelName,reservationlist}