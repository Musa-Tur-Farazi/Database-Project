import React, {useRef} from 'react'
import Navbar from './Navbar'
import {customer_id, nav, Setting} from "../App";
import '../CSSfolder/loginstyle.css'
import {Form} from "react-bootstrap"
import {Button} from "react-bootstrap";
import './Assests/bootstrap.min.css';
import '../CSSfolder/Hover.css'
import axios from "axios";
import {useAsync} from "react-async"
import {loginclick1} from "./loginclick";
import Cookies from 'universal-cookie';
import {roomQuantity} from "./Booking";


const cookies = new Cookies();
const COOKIE_AGE=31536000


const  Login= () =>{
    var Role;
    const  optionClick=async (role)=>
    {
        Role=role;
    }

    const emailRef=useRef()
    const passRef=useRef()

    const  loginClick=async  ()=>{
        const email=emailRef.current.value
        const password=passRef.current.value
        if(Role==="1")
        {
            try{

                var res= await axios.post('http://localhost:8080/loginadmin',{
                    mail:email,
                    password:password
                })
                console.log(res);
                if(res.data.status==="success") {
                    cookies.set('user', {...res.data,email:email},{ path: '/', maxAge: COOKIE_AGE })
                    Setting(true,res.data.username,res.data.user_id,email,true);
                    nav('/home')
                }
            }
            catch(e){
                console.log(e);
            }
        }
        else
        {
            try{

                var res= await axios.post('http://localhost:8080/loginuser',{
                    mail:email,
                    password:password
                })
                console.log(res);
                if(res.data.status==="success") {
                    cookies.set('user', {...res.data,email:email},{ path: '/', maxAge: COOKIE_AGE })
                    Setting(true,res.data.username,res.data.user_id,email,false);
                    nav('/home')
                }
            }
            catch(e){
                console.log(e);
            }
        }


    }

    return(
        <div>
            <Navbar/>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail" style={{
                    width: "500px",
                    marginLeft:"500px"
                }}
                >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" style={{
                    width: "500px",
                    marginLeft:"500px"
                }} >
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{
                    display:"flex",
                    flexDirection:"row"
                }}>
                    <Form.Check type="checkbox" style={{
                        marginLeft:"500px",
                        marginTop:"15px"
                    }}/>
                    <Form.Label style={{marginLeft:"15px"}} > Remember me</Form.Label>
                </Form.Group>
                <select className="form-control"  onChange={e => {
                    optionClick(e.target.value);
                }} style={{ marginLeft : "500px",width : "350px"}}>
                    <option value="" selected hidden>select how you want to login</option>
                    <option value="1" >Admin</option>
                    <option value="2" >User</option>

                </select>
                <div style={{display:"flex",alignItems:"center"}}>
                    <Button  onClick={loginClick}  variant="primary"  style={{
                        marginLeft:"500px",
                        marginTop : "50px",
                        background:"#DFEBEE",
                        color:"black",
                        width : "200px"
                    }}>
                        Submit
                    </Button>
                </div>

            </Form>


        </div>
    )
}

export default Login
