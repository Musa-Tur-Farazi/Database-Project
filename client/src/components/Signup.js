import React from 'react'
import Navbar from './Navbar'
import '../CSSfolder/signupstyle.css'
import axios from "axios";
import {nav, Setting, isLoggedIn,setLoginName} from "../App";

const Signup= () =>{
    const signupclick=()=>{
        var username=document.getElementById("Username").value;
        var email=document.getElementById("Email").value;
        var password=document.getElementById("password").value;
        var zipcode=document.getElementById("zipcode").value;
        var street=document.getElementById("street").value;
        var city=document.getElementById("city").value;
        var country=document.getElementById("country").value;
        var phn=document.getElementById("phonenumber").value;
        axios.post('http://localhost:8080/register',{
            username:username,
            mail:email,
            password:password,
            street:street,
            city:city,
            country:country,
            phoneNumber:phn

        }).then(res=>{
            console.log(res.data)
            if(res.data.success) {

                Setting(true,username);
                nav('/home')
            }
            else
            {
                alert(username+" already exist");
            }
            //setLoginName(res.data.username)

        }).catch(err=>{
            console.log(err)
        })

    }
    return(
        <div>
            <Navbar/>
            <div className="downfall">
            <div className="container">
        <div className="form">
            <div className="heading">
                <img src="finalforsignup/img/logoproject.jpg" class="logo"/>
                <h1>Registration Form</h1>
            </div>
            <div className="wrap">

            </div>
            <div className="wrap2">

                <input type="text" placeholder="Username" id="Username"/>
                <span className="focus-input2"></span>

            </div>
            <div className="wrap2">

                <input type="text" placeholder="Email" id="Email"/>
                <span className="focus-input2"></span>

            </div>

            <div className="wrap2">
                {/*<label>Password</label>*/}
                <input type="password" placeholder="Password" id="password"/>
                <span className="focus-input2"></span>

            </div>
            <div className="wrap2">
                {/*<label>Confirm Passsword</label>*/}
                <input type="password" placeholder="Confirm password"/>
                <span className="focus-input2"></span>

            </div>
            <div className="wrap2">
                {/*<label>Phone Number</label>*/}
                <input type="number" placeholder="phoneNumber" id="phonenumber"/>
                <span className="focus-input2"></span>

            </div>
            <div className="wrap2">

                <input type="text" placeholder="zipcode" id="zipcode"/>
                <span className="focus-input2"></span>

            </div>
            <div className="wrap2">

                <input type="text" placeholder="street" id="street"/>
                <span className="focus-input2"></span>

            </div>
            <div className="wrap2">

                <input type="text" placeholder="city" id="city"/>
                <span className="focus-input2"></span>

            </div>
            <div className="wrap2">

                <input type="text" placeholder="country_name" id="country"/>
                <span className="focus-input2"></span>

            </div>
            <div>

                <select name="gender" style={{marginTop:"5px",marginBottom:"10px"}}>
                    <option value="none" selected>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">other</option>
                </select>

            </div>

            <button className="btn" onClick={signupclick}>Register</button>

        </div>

        <div className="image">
            <img src="finalforsignup/img/hotelhero.png" class="img" alt=""/>

        </div>
    </div>
            </div>
        </div>
    )
}

export default Signup