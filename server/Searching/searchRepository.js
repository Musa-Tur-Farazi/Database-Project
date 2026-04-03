const Repository = require("../Authentication/connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { default: axios } = require("axios");
const geolib = require("geolib");
const { SUBSCR_GROUPING_CLASS_TIME } = require("oracledb");

const tokenExpiryDuration = 86400;
var latitude, longitude, latitude1, longitude1;
class SearchRepository extends Repository {
  constructor() {
    super();
  }

  location = async (place) => {
    await axios
        .get(
            `https://api.geoapify.com/v1/geocode/search?text=${place}&format=json&apiKey=b80e27d9c9c74f87a60c88212c478a9b`
        )
        .then((response) => {
          var okla = 0;
          var oklon = 0;
          response.data.results.map((r) => {
            if (!okla) {
              latitude = r.lat;
              okla = 1;
            }
            if (!oklon) {
              longitude = r.lon;
              oklon = 1;
            }
          });
        });
  };

  distance = async (place) => {
    var response = await axios.get(
        `https://api.geoapify.com/v1/geocode/search?text=${place}&format=json&apiKey=b80e27d9c9c74f87a60c88212c478a9b`
    );
    var okla = 0;
    var oklon = 0;
    await Promise.all(
        response.data.results.map((r) => {
          if (!okla) {
            latitude1 = r.lat;
            okla = 1;
          }
          if (!oklon) {
            longitude1 = r.lon;
            oklon = 1;
          }
        })
    );
  };

  address = async (data) => {
    console.log("in searchRepository");

    await this.location(data.place);
    const nearbyHotel = [];

    const query1 = "select hotel_id,name,streetName,city,country,rating,review,image from hotel natural join hotel_pic ";
    const params1 = [];
    let result1 = await this.sqlQuery(query1, params1); // for nearby hotel_id
    console.log("in address in search repository");
    for (var r1 in result1.data) {
      var row1 = result1.data[r1];
      const place = row1.STREETNAME + "," + row1.CITY + "," + row1.COUNTRY;
      await this.distance(place);

      var dis =
          geolib.getDistance(
              { latitude: latitude, longitude: longitude },
              { latitude: latitude1, longitude: longitude1 }
          ) / 1000;
      console.log("distance is:"+dis);
      if (dis < 1000) {
        nearbyHotel.push({
          hotel_id:row1.HOTEL_ID,
          hotel_name:row1.NAME,
          address:place,
          rating:row1.RATING,
          review:row1.REVIEW,
          image:row1.IMAGE
        });
      }
    }
    console.log("nearby hotels are in searchRepository");
    console.log(nearbyHotel);
    return {
      success: true,
      data:nearbyHotel
    };
  };
  toprated=async (req,res)=>{
    const query1 = "select hotel_id,name,streetName,city,country,rating,review,image from hotel natural join hotel_pic order by rating desc";
    const params1 = [];
    let result1 = await this.sqlQuery(query1, params1);
    var top=[];
    for (var r in result1.data) {
      var row1 = result1.data[r];
      const place = row1.STREETNAME + "," + row1.CITY + "," + row1.COUNTRY;
        top.push({
          hotel_id:row1.HOTEL_ID,
          hotel_name:row1.NAME,
          address:place,
          rating:row1.RATING,
          review:row1.REVIEW,
          image:row1.IMAGE
        });

    }
    return {
      success: true,
      data: top
    };
  }
}
module.exports = SearchRepository;
