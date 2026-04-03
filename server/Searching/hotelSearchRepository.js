const Repository = require("../Authentication/connection");
//const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");
const { default: axios } = require("axios");
const { SUBSCR_GROUPING_CLASS_TIME } = require("oracledb");

const tokenExpiryDuration = 86400;

class HotelSearchRepository extends Repository {
    constructor() {
        super();
    }


    hotelDetail = async (data) => {
        console.log("in hotelSearch");
       console.log(data.check_indate);
        var hotelRooms = [];

         const query1 = "select hotel_id,name,streetName,city,country,rating,review,image from hotel natural join hotel_pic ";
         const params1 = [];
         let result1 = await this.sqlQuery(query1, params1); // for nearby hotel_id
        const query2 = "select hotel_id,room_id,room_type from ROOMS where hotel_id=:0 and ((hotel_id,room_id) not in (SELECT hotel_id,room_id from BOOKED natural join booking where (TO_DATE(:1, 'dd/mm/yyyy')>=BOOKING.check_indate and TO_DATE(:2, 'dd/mm/yyyy')<=BOOKING.check_outdate) or(TO_DATE(:3, 'dd/mm/yyyy')>=BOOKING.check_indate and TO_DATE(:4, 'dd/mm/yyyy')<=BOOKING.check_outdate)))";
        const params2 = [data.hotel_id,data.check_indate,data.check_indate,data.check_outdate,data.check_outdate];
        let result2 = await this.sqlQuery(query2, params2);// available hotel_id,room_id on the searched criteria

        const query3 = "select * from image_cost where hotel_id=:0";
        const params3 = [data.hotel_id];
        let result3 = await this.sqlQuery(query3, params3);
        const query4 = "select service_id,cost,description from services where hotel_id=:0";
        const params4 = [data.hotel_id];
        let service = await this.sqlQuery(query4, params4);
        console.log("in hotel services"+service);
        var services=[];
        for(var r in service.data){
            var row=service.data[r];
            services.push({
                id:row.SERVICE_ID,
                description:row.DESCRIPTION,
                cost:row.COST
            })

        }
        console.log("in hotel search repository");
        console.log(result2.data);

                for (var r3 in result3.data){
                  var row3=result3.data[r3];
                  var list_of_rooms=[];
                    for(var r2 in result2.data){
                      var row2=result2.data[r2];
                      console.log(row2);
                      if(row2.ROOM_TYPE==row3.ROOM_TYPE){
                        list_of_rooms.push(row2.ROOM_ID);
                      }
                    }
                    hotelRooms.push({
                      hotel_id:row3.HOTEL_ID,
                      hotel_name:data.name,
                      room_type:row3.ROOM_TYPE,
                      cost:row3.COST_PER_NIGHT,
                      available_rooms:list_of_rooms.length,
                      room_ids:list_of_rooms,
                        image:row3.IMAGE
                    });

                }


        console.log("nearby hotels are in searchRepository");
        console.log(hotelRooms);
        return {
            success: true,
            data:hotelRooms,
            service:services
        };
    };
}
module.exports = HotelSearchRepository;


