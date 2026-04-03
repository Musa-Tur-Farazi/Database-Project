import React from "react"
import {Button, Carousel} from "react-bootstrap";
import "../CSSfolder/Hover.css"
import image from "../images/giphy.gif"
import image2 from "../images_cards/hotelcard-2.jpg";
import image3 from "../images_cards/hotelcard-3.jpg";
import image4 from "../images_cards/hotelcard-4.jpg";
import {useNavigate} from "react-router-dom";
import {hotelDetails, hotelServices} from "./AfterSearchFromHome";
import {roomQuantity, serviceQuantity} from "./Booking";
import {duration} from "./Home";
var nav
var rooms=[];
var services=[];
var cost;
const AfterSubmitBooking=()=>
{
    nav=useNavigate();
    const click=async ()=>
    {
        rooms=[];
        services=[];
        console.log(duration);
        var room_price=new Map();
        for(var r in hotelDetails){
            var row=hotelDetails[r];
            room_price.set(row.room_type,row.cost);
        }
        var service_price=new Map();
        for(var r in hotelServices){
            var row=hotelServices[r];
           service_price.set(row.id,row.cost);
        }
        cost=0;
        rooms=[];
        for (let [key, value] of roomQuantity) {
            rooms.push({room_type:key,
                quantity:value
            })
            cost+=(parseInt(room_price.get(key),10)*parseInt(duration,10)*parseInt(value,10));
        }
         services=[];
        for (let [key, value] of serviceQuantity) {
            services.push({id:key,
                quantity:value
            })
            cost+=(parseInt(service_price.get(key),10)*parseInt(duration,10)*parseInt(value,10));
        }
        console.log("aftersubmit:");
        console.log(cost);

        nav('/payMethod')
    }
    const cardClick=async ()=>
    {
        rooms=[];
        services=[];
        console.log(duration);
        var room_price=new Map();
        for(var r in hotelDetails){
            var row=hotelDetails[r];
            room_price.set(row.room_type,row.cost);
        }
        var service_price=new Map();
        for(var r in hotelServices){
            var row=hotelServices[r];
            service_price.set(row.id,row.cost);
        }
        cost=0;
        rooms=[];
        for (let [key, value] of roomQuantity) {
            rooms.push({room_type:key,
                quantity:value
            })
            cost+=(parseInt(room_price.get(key),10)*parseInt(duration,10)*parseInt(value,10));
        }
        services=[];
        for (let [key, value] of serviceQuantity) {
            services.push({id:key,
                quantity:value
            })
            cost+=(parseInt(service_price.get(key),10)*parseInt(duration,10)*parseInt(value,10));
        }
        console.log("aftersubmit:");
        console.log(cost);

        nav('/cardPayment')
    }
    return(
        <div style={{background:"#e3ecec"}}>
            <Carousel style={{height: "600px"}}>
                <Carousel.Item>
                    <img style={{height: "500px"}}
                         className="d-block w-100"
                         src={image}
                         alt="First slide"
                    />

                </Carousel.Item>
            </Carousel>
            <h2 style={{textAlign:"center",fontFamily:"fantasy",marginTop:"3%"}}>Choose Payment Method</h2>
            <div >
                <Button variant="secondary"  style={{background:"#c6e7e7",color:"black", width:"40%",marginTop:"5%",marginLeft:"30%"}} onClick={()=>{click()}}>
                    Mobile Banking
                </Button>
                <Button variant="secondary"  style={{background:"#c6e7e7",color:"black", width:"40%",marginTop:"1%",marginLeft:"30%",marginBottom:"15%"}}  onClick={()=>{cardClick()}} >
                    Credit Card
                </Button>
            </div>
        </div>
    )
}
export default AfterSubmitBooking
export {rooms,services,cost}