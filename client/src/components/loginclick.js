import React from "react";
import Navbar from './Navbar'
import {nav, setLoginName,status2,Setting} from "../App";
import '../CSSfolder/loginstyle.css'
import {Form} from "react-bootstrap"
import {Button} from "react-bootstrap";
import './Assests/bootstrap.min.css';
import '../CSSfolder/Hover.css'
import axios from "axios";
import {useAsync} from "react-async"

export const loginclick1=async (email, password)=>{
   // setLoading(true)
    await axios.post('http://localhost:8080/login',{
        mail:email,
        password:password
    }).then(res=>{
        console.log(res.data)
       // passData(res.data)
        
        // if(res.data.type===3)
        // //     setPage(7)
        // else setPage(6)

    }).catch(err=>{
        // if(err.response.status===401){
        //      showToast('password incorrect')
        // }
        // else if(err.response.status===404){
        //      showToast('email is not found')
        // }
        console.log(err);

    }).finally(()=>{
      //  setLoading(false)
    })

}
