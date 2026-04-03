const Repository = require("../Authentication/connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const tokenExpiryDuration = 86400;

class UserRepository extends Repository {
    constructor() {
        super();
    }

    preBooking = async (data) => {
        const query1 =
            "select unique(boo.hotel_id),boo.booking_id,count(*) cnt from booked boo,booking bok where boo.booking_id=bok.booking_id and bok.customer_id=:0 and bok.check_outdate<sysdate group by boo.hotel_id,boo.booking_id";
        const params1 = [data.id];
        let result1 = await this.sqlQuery(query1, params1);
        const query2 =
            "select hotel_id,name,rating,image,city,streetname,country from hotel natural join hotel_pic";
        const params2 = [];
        let result2 = await this.sqlQuery(query2, params2);
        const query3 =
            "select booking_id,check_indate,check_outdate from booking where customer_id=:0";
        const params3 = [data.id];
        let result3 = await this.sqlQuery(query3, params3);
        var map=new Map();
        var map2=new Map();
        for(var r in result2.data){
            var row=result2.data[r];
            map.set(row.HOTEL_ID,{
                name:row.NAME,
                rating:row.RATING,
                image:row.IMAGE,
                address:row.STREETNAME+","+row.CITY+","+row.COUNTRY

            });
        }
        for(var r in result3.data){
            var row=result3.data[r];
            map2.set(row.BOOKING_ID,{
                check_indate:row.CHECK_INDATE,
                check_outdate:row.CHECK_OUTDATE

            });
        }
       var preBookings=[];
        for(var r in result1.data){
            var row=result1.data[r];
            preBookings.push({
                id:row.HOTEL_ID,
                name:map.get(row.HOTEL_ID).name,
                address:map.get(row.HOTEL_ID).address,
                image:map.get(row.HOTEL_ID).image,
                rating:map.get(row.HOTEL_ID).rating,
                check_indate:map2.get(row.BOOKING_ID).check_indate,
                check_outdate:map2.get(row.BOOKING_ID).check_outdate,
                rooms:row.CNT

            })
        }


        return {
            success: true,
            data:preBookings
        };

    };
    futureBooking = async (data) => {
        const query1 =
            "select unique(boo.hotel_id),boo.booking_id,count(*) cnt from booked boo,booking bok where boo.booking_id=bok.booking_id and bok.customer_id=:0 and bok.check_indate>=sysdate group by boo.hotel_id,boo.booking_id";
        const params1 = [data.id];
        let result1 = await this.sqlQuery(query1, params1);
        const query2 =
            "select hotel_id,name,rating,image,city,streetname,country from hotel natural join hotel_pic";
        const params2 = [];
        let result2 = await this.sqlQuery(query2, params2);
        const query3 =
            "select booking_id,check_indate,check_outdate from booking where customer_id=:0";
        const params3 = [data.id];
        let result3 = await this.sqlQuery(query3, params3);
        var map=new Map();
        var map2=new Map();
        for(var r in result2.data){
            var row=result2.data[r];
            map.set(row.HOTEL_ID,{
                name:row.NAME,
                rating:row.RATING,
                image:row.IMAGE,
                address:row.STREETNAME+","+row.CITY+","+row.COUNTRY

            });
        }
        for(var r in result3.data){
            var row=result3.data[r];
            map2.set(row.BOOKING_ID,{
                check_indate:row.CHECK_INDATE,
                check_outdate:row.CHECK_OUTDATE

            });
        }
        var preBookings=[];
        for(var r in result1.data){
            var row=result1.data[r];
            preBookings.push({
                id:row.HOTEL_ID,
                name:map.get(row.HOTEL_ID).name,
                address:map.get(row.HOTEL_ID).address,
                image:map.get(row.HOTEL_ID).image,
                rating:map.get(row.HOTEL_ID).rating,
                check_indate:map2.get(row.BOOKING_ID).check_indate,
                check_outdate:map2.get(row.BOOKING_ID).check_outdate,
                rooms:row.CNT

            })
        }


        return {
            success: true,
            data:preBookings
        };

    };
    profileUpdate=async(data)=>{
        const query1 =
            "begin userupdate(:0,:1,:2,:3,:4,:5,:6,:7); end;" ;
        const params1 = [data.id,data.name,data.mail,data.phonenumber,data.password,data.city,data.street,data.country];
        let result1 = await this.sqlQuery(query1, params1);
        return {
            success: true
        };
    }


}
module.exports = UserRepository;
