import React from 'react';
import { Input, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { PhotoCamera } from '@mui/icons-material';
import axios from 'axios';
import { nav, setLoginName, customer_id } from '../App';
import logo from '../images/logoproject.jpg';
import '../CSSfolder/userprofile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = () => {
  const Click = async () => {
    console.log('in user profile');
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
      var res = await axios.post('http://localhost:8080/userprofile', {
        id: customer_id,
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
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navcontainer">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto">
              <li
                style={{ cursor: 'pointer', marginLeft: '40px', fontFamily: 'monospace' }}
                className="nav-item"
                onClick={() => {
                  nav('/userprofile');
                }}
              >
                {setLoginName}
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>
        <div className="row">
          <div className="new-container">
            <div className="container row form-top">
              <div className="col-md-3 border-right">
                <div className="profile-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                    alt=""
                  />
                    <div className="  file btn btn-lg btn-primary ">
                      Change Photo
                      <input type="file" name="file"/>
                  </div>
                  <Input accept="image/*" id="icon-button-file" type="file" />
                  <IconButton color="primary" aria-label="upload picture" component="span">
                      <PhotoCamera />
                  </IconButton>
                </div>
              </div>
              <div className="col-md-5 border-right">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label className="labels">Name</label>
                      <input
                        type="text"
                        style={{ textAlign: 'center' }}
                        className="form-control"
                        placeholder="first name"
                        id="name"
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-12">
                      <label className="labels">Mobile Number</label>
                      <input
                        type="number"
                        style={{ textAlign: 'center' }}
                        className="form-control"
                        placeholder="enter phone number"
                        id="phonenumber"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Password</label>
                      <input
                        type="password"
                        style={{ textAlign: 'center' }}
                        className="form-control"
                        placeholder="enter password"
                        id="password"
                      />
                    </div>
                    <div className="col-md-12"><label className="labels">Confirm password</label><input type="password"
                                                                                                        style={{textAlign:"center"}}
                                                                                                        className="form-control"
                                                                                                        placeholder="enter confirm password"
                    /></div>
                    <div className="col-md-12">
                      <label className="labels">Email ID</label>
                      <input
                        type="text"
                        style={{ textAlign: 'center' }}
                        className="form-control"
                        placeholder="enter email id"
                        id="mail"
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label className="labels">Country</label>
                      <input
                        type="text"
                        style={{ textAlign: 'center' }}
                        className="form-control"
                        placeholder="country"
                        id="country"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">city</label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ textAlign: 'center' }}
                        placeholder="city"
                        id="city"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Street Name</label>
                      <input
                        type="text"
                        style={{ textAlign: 'center' }}
                        className="form-control"
                        placeholder="enter Street name"
                        id="street"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 py-5">
                  <div className="mt-5 text-center">
                    <Button
                      className="btn btn-primary profile-button"
                      type="button"
                      onClick={() => {
                        Click();
                      }}
                    >
                      Save Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
