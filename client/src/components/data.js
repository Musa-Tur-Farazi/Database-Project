// import image1 from "../images_cards/hotelcard-1.jpg"

// import {nearByHotels} from "./Home";
// var data=[];
// for (var r in nearByHotels)
// {
//     console.log("card data");
//     console.log(nearByHotels[r]);
//     data.push(nearByHotels[r]);
// }
// export default data

// const Repository = require("../../../Backend/Authentication/connection");
// //const bcrypt = require("bcryptjs");
// //const jwt = require("jsonwebtoken");
// const { default: axios } = require("axios");
// const geolib = require("geolib");
// const { SUBSCR_GROUPING_CLASS_TIME } = require("oracledb");

// const tokenExpiryDuration = 86400;
// var latitude, longitude, latitude1, longitude1;
// class SearchRepository extends Repository {
//     constructor() {
//         super();
//     }

//     location = async (place) => {
//         await axios
//             .get(
//                 `https://api.geoapify.com/v1/geocode/search?text=${place}&format=json&apiKey=b80e27d9c9c74f87a60c88212c478a9b`
//             )
//             .then((response) => {
//                 var okla = 0;
//                 var oklon = 0;
//                 response.data.results.map((r) => {
//                     if (!okla) {
//                         latitude = r.lat;
//                         okla = 1;
//                     }
//                     if (!oklon) {
//                         longitude = r.lon;
//                         oklon = 1;
//                     }
//                 });
//             });
//     };

//     distance = async (place) => {
//         var response = await axios.get(
//             `https://api.geoapify.com/v1/geocode/search?text=${place}&format=json&apiKey=b80e27d9c9c74f87a60c88212c478a9b`
//         );
//         var okla = 0;
//         var oklon = 0;
//         await Promise.all(
//             response.data.results.map((r) => {
//                 if (!okla) {
//                     latitude1 = r.lat;
//                     okla = 1;
//                 }
//                 if (!oklon) {
//                     longitude1 = r.lon;
//                     oklon = 1;
//                 }
//             })
//         );
//     };

//     address = async (data) => {
//         console.log("in searchRepository");
//         console.log(data);
//         await this.location(data.place);
//         const nearbyHotel = [];

//         const query1 = "select hotel_id,name,streetName,city,country from hotel ";
//         const params1 = [];
//         let result1 = await this.sqlQuery(query1, params1);
//         const query2 =
//             "select hotel_id,room_type,sum(availability) as available_rooms from rooms group by hotel_id,room_type";
//         const params2 = [];
//         let result2 = await this.sqlQuery(query2, params2);
//         const query3 = "select * from image";
//         const params3 = [];
//         let result3 = await this.sqlQuery(query3, params3);
//         console.log("in address in search repository");

//         var myMap = new Map();
//         for (var r in result2.data) {
//             var row = result2.data[r];
//             var obj = {
//                 hotel_id: row.HOTEL_ID,
//                 room_type: row.ROOM_TYPE,
//             };
//             myMap.set(obj, row.AVAILABLE_ROOMS);
//         }

//         var myMap2 = new Map();
//         for (var r in result3.data) {
//             var row = result3.data[r];
//             var obj = {
//                 hotel_id: row.HOTEL_ID,
//                 room_type: row.ROOM_TYPE,
//             };
//             myMap2.set(obj, { image: row.IMAGE_OF_ROOM, cost: row.COST_PER_NIGHT });
//         }
//         var myMap3 = new Map();

//         for (var r in result1.data) {
//             var row = result1.data[r];
//             const place = row.STREETNAME + "," + row.city + "," + row.country;
//             await this.distance(place);

//             var dis =
//                 geolib.getDistance(
//                     { latitude: latitude, longitude: longitude },
//                     { latitude: latitude1, longitude: longitude1 }
//                 ) / 1000;
//             if (dis < 5) {
//                 myMap3.set(row.HOTEL_ID, {
//                     status: true,
//                     name: row.NAME,
//                     address: row.STREETNAME + "," + row.CITY + "," + row.COUNTRY,
//                 });
//             } else myMap3.set(row.HOTEL_ID, { status: false });
//         }
//         for (var [key, value] of myMap) {
//             var obj = myMap3.get(key.hotel_id);
//             if (obj.status) {
//                 var Cost, Image;
//                 for (var [key2, value2] of myMap2)
//                     if (
//                         key2.hotel_id == key.hotel_id &&
//                         key2.room_type == key.room_type
//                     ) {
//                         Cost = value2.cost;
//                         Image = value2.image;
//                     }
//                 console.log(Cost);

//                 nearbyHotel.push({
//                     hotel_name: obj.name,
//                     room_type: key.room_type,
//                     address: obj.address,
//                     available_rooms: value,
//                     cost: Cost,
//                     image: Image,
//                 });
//             }
//         }
//         console.log("nearby hotels are");
//         console.log(nearbyHotel);
//         return {
//             success: true,
//             data:nearbyHotel
//         };
//     };
// }
// module.exports = SearchRepository;

