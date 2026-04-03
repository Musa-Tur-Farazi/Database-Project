import React, {useEffect, useRef, useState} from "react";
import UserDrawer from "./UserDrawer";
import MaterialTable from "material-table";
import AddIcon from "@material-ui/icons/Add";
import {Button, CardActions, Grid} from "@mui/material";
import axios from "axios";
import {customer_id} from "../App";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";




////not completed yet
const VisitedPlaces=()=>
{
    var [mapObject,setmapObject]=useState(null)

    const containerRef=useRef()
    useEffect(()=> {
        var map = new window.google.maps.Map(containerRef.current, {
            center: {lat: -34.397, lng: 150.644},
            zoom: 1,
        })
        setmapObject(map)

    }, [])

    const [futurebooking,setfuturebooking]=useState([]);
    useEffect(async()=>{
        try{
            console.log("in dashboard");
            var res=await axios.post('http://localhost:8080/futurebooking',{
                id:customer_id
            })
            setfuturebooking(res.data.data);

        }
        catch(e){
            console.log(e);
        }
    },[])

    const clickedButton=()=> {
        var markers = [];
        var places=[{lat:20.87,lng:30.78},{lat:40.87,lng:10.78},{lat:5.87,lng:30.78}]
        places.map(p=>{
            var marker = new window.google.maps.Marker({
                position: new window.google.maps.LatLng(p.lat,p.lng),
                title:"Hello World!"
            });
            markers.push(new window.google.maps.LatLng(p.lat,p.lng))
            marker.setMap(mapObject)


        })
        //some array
        var bounds = new window.google.maps.LatLngBounds();
        for (var i = 0; i < markers.length; i++) {
            bounds.extend(markers[i]);
        }

        mapObject.fitBounds(bounds);
    }

    return(
        <div>
            <UserDrawer/>
            <div style={{marginLeft:"20%"}}>
                <div>
                    <div ref={containerRef} style={{width:"80vw",height:"50vh"}}>


                    </div>
                    <div >
                        <Button variant="outlined" onClick={clickedButton}>Outlined</Button>
                    </div>

                </div>
                <Grid  container spacing={4} padding={4} >
                    {futurebooking.map((item,index)=>
                    {
                        return(
                            <Grid item xs={12} md={4}>
                                <Card sx={{ maxWidth: 345 }} >
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        src={item.image}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Arrival date:{item.check_indate}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            checkOut date:{item.check_outdate}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            rooms booked: {item.rooms}
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

        </div>

    )
}
export default VisitedPlaces