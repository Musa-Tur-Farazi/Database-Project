import React, {useState} from 'react';
import '../CSSfolder/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import logo from "../images/logoproject.jpg";
import {hotel_name,hotelDetails,hotelServices,hotelFacilities} from "./AfterSearchFromHome";
import axios from "axios";
import {check_indate, check_outDate} from "./Home";
import {toppings} from "./toppings";
var nav
const getFormattedPrice = (price) => `$${price.toFixed(2)}`;
var roomQuantity,serviceQuantity;
const Booking=()=>
{
    nav = useNavigate();
    roomQuantity=new Map();
    for(var r in hotelDetails){
        var row=hotelDetails[r];
        roomQuantity.set(row.room_type,0);
    }
    serviceQuantity=new Map();
    for(var r in hotelServices){
        var row=hotelServices[r];
        serviceQuantity.set(row.id,0);
    }
    const [checkedState,setCheckedState]=useState(
        new Array(toppings.length).fill(false)
    );
    const [total, setTotal] = useState(0);
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        const totalPrice = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + toppings[index].price;
                }
                return sum;
            },
            0
        );

        setTotal(totalPrice);
    };
    const click=async ()=>
    {
        nav('/afterbookingbutton')
    }
    const roomClick=async (room_type,quantity)=>
    {
        roomQuantity.set(room_type,quantity)
    }
    const serviseClick=async (id,quantity)=>
    {
        serviceQuantity.set(id,quantity)
    }


    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li style={{cursor: 'pointer', marginLeft: "40px", fontFamily: 'monospace'}}
                            className="nav-item" onClick={() => {
                            nav("/HotelName")
                        }}>
                            {hotel_name}
                        </li>
                        <li style={{cursor: 'pointer', marginLeft: "40px", fontFamily: 'monospace'}}
                            className="nav-item" onClick={() => {
                            nav("/detailedViewHotel")
                        }}>
                            Rooms
                        </li>


                    </ul>

                </div>
            </nav>

            <div id="booking" className="section" style={{background:"#EDF2F4"}}>
                <div className="section-center" style={{background:"#EDF2F4"}}>
                    <div className="container" style={{background:"#EDF2F4"}} >
                        <div className="row">
                            <div className="booking-form" style={{background:"#EDF2F4"}}>
                                <div className="booking-bg"  >
                                    <div className="form-header">
                                        <h2 style={{color:"black"}}>Make your reservation</h2>
                                        <p style={{color:"black", marginTop:"120px",fontStyle:"oblique"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam
                                            numquam at</p>
                                    </div>
                                </div>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <span className="form-label">Adults</span>
                                                <select className="form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <span className="select-arrow"></span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <span className="form-label">Children</span>
                                                <select className="form-control">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                </select>
                                                <span className="select-arrow"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="room_showing">
                                        {hotelDetails.map((item)=>{
                                            var array=[];
                                            for(var r=0;r<=item.available_rooms;r++)
                                                array.push(r);
                                            return (
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <span className="form-label">Room Type:{item.room_type}</span>
                                                        <select className="form-control"  onChange={e => {
                                                            roomClick(item.room_type,e.target.value);
                                                        }}>
                                                            <option value="" selected hidden>Select number of rooms</option>
                                                            {array.map((item2)=> {
                                                                return(
                                                                <option value={item2}>{item2}</option>
                                                                )
                                                            })}
                                                        </select>
                                                        <span className="select-arrow"></span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="service_showing">
                                        <h3>Select Food services</h3>
                                        {hotelServices.map((item)=>{
                                            var array=[];
                                            for(var r=0;r<=100;r++)
                                                array.push(r);
                                            return (
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <span className="form-label">{item.description}</span>
                                                        <select className="form-control" onChange={e => {
                                                            serviseClick(item.id,e.target.value);
                                                        }}>
                                                            <option value="" selected hidden>Select number of this service</option>
                                                            {array.map((item2)=> {
                                                                return(
                                                                    <option value={item2}>{item2}</option>
                                                                )
                                                            })}
                                                        </select>
                                                        <span className="select-arrow"></span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="form-btn" >
                                        <button className="submit-btn" style={{background:"#95a6a6", color:"black"}} onClick={()=>{click()}}  >Book</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Booking
export {roomQuantity,serviceQuantity}