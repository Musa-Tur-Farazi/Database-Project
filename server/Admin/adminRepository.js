const Repository = require("../Authentication/connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const tokenExpiryDuration = 86400;

class AdminRepository extends Repository {
    constructor() {
        super();
    }

    adminFirstPage = async (data) => {
        const query1 =
            "select hotel_id,name,city,streetname,country,rating,image from hotel natural join hotel_pic where admin_userid=501";
        const params1 = [];
        let result1 = await this.sqlQuery(query1, params1);
        var adminHotel=[];
        for(var r in result1.data)
        {
            var row=result1.data[r];
            adminHotel.push({
                hotel_id:row.HOTEL_ID,
                hotel_name:row.NAME,
                address:row.STREETNAME+","+row.CITY+","+row.COUNTY,
                rating:row.RATING,
                image:row.IMAGE
            })
        }
        console.log(adminHotel);
        return {
            success: true,
            data:adminHotel
        };

    };
    adminHotelDetails=async(data)=>{
        const query1 =
            "select room_type,cost_per_night,image from image_cost where hotel_id=:0";
        const params1 = [data.hotel_id];
        let result1 = await this.sqlQuery(query1, params1);

        const query2 =
            "select room_type,room_id from rooms where hotel_id=:0";
        const params2 = [data.hotel_id];
        let result2 = await this.sqlQuery(query2, params2);


        return {
            success: true,
            data1:result1.data,
            data2:result2.data
        };
    }
    adminServiceDetails=async(data)=>{
        const query1 =
            "select service_id,cost,description from services where hotel_id=:0";
        const params1 = [data.hotel_id];
        let result1 = await this.sqlQuery(query1, params1);
          var free=[];
          var paid=[];
       for(var r in result1.data){
           var row=result1.data[r];
           if(row.COST){
               paid.push(row);
           }
           else {free.push(row)}
       }

        return {
            success: true,
            data1:free,
            data2:paid
        };
    }
    updateType=async (data)=>{
        const query1 =
            "update image_cost set room_type=:0,cost_per_night=:1,image=:2 where room_type=:3 and hotel_id=:4";
        const params1 = [data.data1.Room_type,data.data1.Cost,data.data1.image,data.data2.Room_type,data.hotel_id];
        let result1 = await this.sqlQuery(query1, params1);
        return {
            success: true
        };
    }
    addType=async(data)=>{
        const query1 =
            "select room_type from image_cost where hotel_id=:0 and upper(room_type)=upper(:1)";
        const params1 = [data.hotel_id,data.room_type];
        let result1 = await this.sqlQuery(query1, params1);
        if(result1.data.length>0)
        {
            return {
                success: false,
                error:"This room type already exists"
            };
        }
        const query2 =
            "insert into image_cost values(:0,:1,:2,:3)";
        const params2 = [data.hotel_id,data.room_type,data.cost,data.image];
        let result2 = await this.sqlQuery(query2, params2);
        return {
            success: true
        };

    }
    addRoom=async(data)=>{
        const query1 =
            "select room_id from rooms where hotel_id=:0 and room_id=:1";
        const params1 = [data.hotel_id,data.room_id,];
        let result1 = await this.sqlQuery(query1, params1);
        if(result1.data.length>0)
        {
            return {
                success: false,
                error:"This room id already exists"
            };
        }
        const query3 =
            "select room_id from rooms where hotel_id=:0 and upper(room_type)=upper(:1)";
        const params3 = [data.hotel_id,data.room_type];
        let result3 = await this.sqlQuery(query3, params3);
        if(result3.data.length==0)
        {
            return {
                success: false,
                error:"No such room type exists"
            };
        }
        const query2 =
            "insert into rooms values(:0,:1,:2)";
        const params2 = [data.room_id,data.hotel_id,data.room_type];
        let result2 = await this.sqlQuery(query2, params2);
        return {
            success: true
        };


    }
    discardRoom=async(data)=>{
        const query1 =
            "select count(*) from rooms where hotel_id=:0 and room_id=:1";
        const params1 = [data.hotel_id,data.room_id];
        let result1 = await this.sqlQuery(query1, params1);
        if(result1.data.length=0)
        {
            return {
                success: false,
                error:"There is no room with this id"
            };
        }
        const query2 =
            "select booking_id from booking natural join booked where BOOKED.HOTEL_ID=:0 and BOOKED.room_id=:1 and SYSDATE BETWEEN BOOKING.CHECK_INDATE and BOOKING.CHECK_OUTDATE";
        const params2 = [data.hotel_id,data.room_id];
        let result2 = await this.sqlQuery(query2, params2);
        if(result1.data.length>=1)
        {
            return {
                success: false,
                error:"This room is under reservation"
            };
        }
        const query3 =
            "delete from rooms where hotel_id=:0 and room_id=:1";
        const params3 = [data.hotel_id,data.room_id];
        let result3 = await this.sqlQuery(query3, params3);
        return {
            success: true
        };


    }
    updateRooms=async(data)=>{
        const query1 =
            "update image_cost set cost_per_night=:0,image=:1 where hotel_id=:2 and room_type=:3";
        const params1 = [data.cost,data.image,data.hotel_id,data.room_type];
        return {
            success: true
        };

    }
   addFreeService=async(data)=>{
        const query1 =
            "insert into services (hotel_id,cost,description) values(:0,0,:1)";
        const params1 = [data.hotel_id,data.description];
       let result1 = await this.sqlQuery(query1, params1);
        return {
            success: true
        };
    }
    addPaidService=async(data)=>{
        const query1 =
            "insert into services (hotel_id,cost,description) values(:0,:1,:2)";
        const params1 = [data.hotel_id,data.cost,data.description];
        let result1 = await this.sqlQuery(query1, params1);
        return {
            success: true
        };
    }
    updateService=async(data)=>{
        const query1 =
            "update services set  cost=:0,description=:1 where upper(description)=upper(:1)";
        const params1 = [data.cost,data.description,data.old];
        let result1 = await this.sqlQuery(query1, params1);
        return {
            success: true
        };
    }
    discardService=async(data)=>{
        const query1 =
            "delete from services where hotel_id=:0 and upper(description)=upper(:1)";
        const params1 = [data.hotel_id,data.description];
        let result1 = await this.sqlQuery(query1, params1);
        return {
            success: true
        };
    }
    reservationList=async(data)=>{
        const query1 =
            "select DISTINCT(booking_id),check_indate,check_outdate,ammount,customer_id from booked natural join booking natural join payment where hotel_id=:0";
        const params1 = [data.hotel_id];
        let result1 = await this.sqlQuery(query1, params1);
        return {
            success: true,
            data:result1.data
        };
    }
    profileUpdate=async(data)=>{
        const query1 =
            "begin adminupdate(:0,:1,:2,:3,:4,:5,:6,:7); end;" ;
        const params1 = [data.id,data.name,data.mail,data.phonenumber,data.password,data.city,data.street,data.country];
        let result1 = await this.sqlQuery(query1, params1);
        return {
            success: true
        };
    }


}
module.exports = AdminRepository;
