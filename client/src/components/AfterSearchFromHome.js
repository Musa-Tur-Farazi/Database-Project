import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import data from './data';
import { BottomNavigation, BottomNavigationAction, CardActions, Container, Menu, Tooltip, Grid } from '@mui/material';
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks';
import '../CSSfolder/Hover.css';
import PopupState from 'material-ui-popup-state';
import { alpha, styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Avatar from '@mui/material/Avatar';
import userlogo from '../images/profileicon.jpg';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import image1 from '../images_cards/hotelcard-1.jpg';
import image2 from '../images_cards/hotelcard-2.jpg';
import image3 from '../images_cards/hotelcard-3.jpg';
import image4 from '../images_cards/hotelcard-4.jpg';
import image5 from '../images_cards/hotelcard-5.jpg';
import { nav } from '../App';
import { nearByHotels, check_indate, check_outDate } from './Home';
import axios from 'axios';
import Navbar from './Navbar';

var hotelDetails = [];
var hotelServices = [];
var hotelFacilities = [];
var hotel_name, hotel_id;

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const setter = (Hotel_id, Hotel_name, HotelDetails, HotelFacilities, HotelServices) => {
  hotel_id = Hotel_id;
  hotel_name = Hotel_name;
  hotelDetails = HotelDetails;
  hotelFacilities = HotelFacilities;
  hotelServices = HotelServices;
};

const click = async (hotel_id, Hotel_name) => {
  hotel_name = Hotel_name;
  try {
    var res = await axios.post('http://localhost:8080/hotelDetail', {
      hotel_id: hotel_id,
      name: hotel_name,
      check_indate: check_indate,
      check_outDate: check_outDate,
    });
    hotelDetails = [];
    hotelFacilities = [];
    for (var r in res.data.rooms) {
      var row = res.data.rooms[r];
      hotelDetails.push(row);
      console.log(row.hotel_name);
    }
    hotelServices = [];
    for (var r in res.data.service) {
      var row = res.data.service[r];
      if (row.cost) hotelServices.push(row);
      else hotelFacilities.push(row);
      console.log('Description: ' + row.description);
    }
    console.log(res.data.status === 'success');
    if (res.data.status === 'success') {
      console.log('inside if');
      nav('/detailedViewHotel');
    }
  } catch (e) {
    console.log(e);
  }
  nav('/detailedViewHotel');
};

const AfterSearchFromHome = () => {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' });

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [value, setValue] = React.useState(0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <Navbar />
      <Grid container spacing={4} padding={4}>
        {nearByHotels.map((item, index) => {
          return (
            <Grid item xs={12} md={4}>
              <Card sx={{ maxWidth: 345 }} className="a" onClick={() => click(item.hotel_id, item.hotel_name)}>
                <CardMedia component="img" height="140" src={item.image} alt="green iguana" />
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
                <CardActions></CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default AfterSearchFromHome;
export { hotelDetails, hotel_name, hotelServices, hotelFacilities, hotel_id, setter };
