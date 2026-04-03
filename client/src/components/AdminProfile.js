import * as React from 'react';
import data from "./data";
import {
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AdminDrawer from './AdminDrawer';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Box from '@mui/material/Box';
import { PhotoCamera } from '@mui/icons-material';
import '../CSSfolder/services.css';
import { adminHotelName, hotel_id } from './FirstPageAdmin';
import axios from 'axios';
import { customer_id } from '../App';

const AdminProfile = () => {
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const [open, setOpen] = useState(false);

  const Click = async () => {
    console.log('in admin profile');
    var name = null,
      password = null,
      mail = null,
      phonenumber = null,
      city = null,
      street = null,
      country = null;
    if (document.getElementById('name') != null)
      name = document.getElementById('name').value;
    if (document.getElementById('mail') != null)
      mail = document.getElementById('mail').value;
    if (document.getElementById('password') != null)
      password = document.getElementById('password').value;
    if (document.getElementById('phonenumber') != null)
      phonenumber = document.getElementById('phonenumber').value;
    if (document.getElementById('city') != null)
      city = document.getElementById('city').value;
    if (document.getElementById('street') != null)
      street = document.getElementById('street').value;
    if (document.getElementById('country') != null)
      country = document.getElementById('country').value;

    try {
      var res = await axios.post('http://localhost:8080/adminprofile', {
        id: 501,
        name: name,
        mail: mail,
        password: password,
        phonenumber: phonenumber,
        city: city,
        street: street,
        country: country,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <AdminDrawer />
      <h3 style={{ textAlign: 'center', fontFamily: 'fantasy', marginTop: '5%', background: '#d8f3f3' }}>
        Hotel name is {adminHotelName}
      </h3>
      <div className="form-container">
        <div className="container">
          <div className="row">
            <h3 style={{ textAlign: 'center', fontFamily: 'monospace', background: '#d8f3f3', padding: '5%', height: '5%' }}>
              Edit Admin Information
            </h3>

            <Stack direction="row" spacing={30}>
              <input type="text" placeholder="Edit name" variant="outlined" style={{ width: '40%' }} id="name" />
              <input type="text" placeholder="Edit password" variant="outlined" style={{ width: '40%' }} id="password" />
            </Stack>
            <Stack direction="row" spacing={30}>
              <input type="text" placeholder="Edit phone number" variant="outlined" style={{ width: '40%' }} id="phonenumber" />
              <input type="text" placeholder="Edit email" variant="outlined" style={{ width: '40%' }} id="mail" />
            </Stack>
            <Stack direction="row" spacing={30}>
              <input type="text" placeholder="Edit city" variant="outlined" style={{ width: '40%' }} id="city" />
              <input type="text" placeholder="Edit street" variant="outlined" style={{ width: '40%' }} id="street" />
            </Stack>
            <Stack direction="row" spacing={30}>
              <input type="text" placeholder="Edit country" variant="outlined" style={{ width: '40%' }} id="country" />
            </Stack>

            <Button
              variant="contained"
              style={{ width: '30%', height: '8%', marginLeft: '35%', background: '#eff5f5', color: 'black' }}
              onClick={() => {
                Click();
              }}
            >
              Save Changes
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
              <DialogTitle id="alert-dialog-title">{'Are you sure you want to edit this information?'}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">Strong password will help you to protect your privacy.Keep your user name and password up to date.</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
