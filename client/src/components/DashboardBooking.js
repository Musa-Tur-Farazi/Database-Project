import React, {useEffect, useState} from "react";
import data from "./data";
import {CardActions, Dialog, Grid, ListItem, ListItemText, Slide, TextareaAutosize} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import UserDrawer from "./UserDrawer";
import {Rating} from "@mui/lab";
import Box from "@mui/material/Box";
import CloseIcon from '@mui/icons-material/Close';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import axios from "axios";
import {hotel_id, room_idUpdate, room_typeUpdate} from "./FirstPageAdmin";
import {customer_id} from "../App";
import {adminHotel} from "./Navbar";
// import {prebooking} from "./Home";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DashboardBooking = () => {
  const [prebooking, setPrebooking] = useState([]);

  useEffect(async () => {
    try {
      console.log('in dashboard');
      var res = await axios.post('http://localhost:8080/prebooking', {
        id: customer_id,
      });
      setPrebooking(res.data.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
      <UserDrawer />
      <div style={{ marginLeft: '20%' }}>
        <Grid container spacing={4} padding={4}>
          {prebooking.map((item, index) => {
            return (
              <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 345 }}>
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
                      Arrival date: {item.check_indate}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      checkOut date: {item.check_outdate}
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
                    <Button size="small">BOOK AGAIN</Button>
                    <Button variant="outlined">Review</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default DashboardBooking;
