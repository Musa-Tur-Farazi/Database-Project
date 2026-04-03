const Repository = require("../Authentication/connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { default: axios } = require("axios");
const { SUBSCR_GROUPING_CLASS_TIME } = require("oracledb");
const tokenExpiryDuration = 86400;
const PDFDocument = require('pdfkit');
const fs = require('fs');
var nodemailer=require("nodemailer");
class BookRepository extends Repository {
    constructor() {
        super();
    }

    booking = async (data) => {
        console.log("in book Repository");
        console.log(data.check_outDate);
        console.log("YOOOOOOOOOOOOOO");
        let pdfDoc = new PDFDocument;
        pdfDoc.pipe(fs.createWriteStream('F:/2-2_Database_project/MyTour/MyTour/Backend/BookingMemo.pdf'));
        pdfDoc
            .fillColor('blue')
            .fontSize(17)
            .text("Thank you for choosing MyTour", 150, 150);

        const query1 =
            "insert into booking (check_indate,check_outdate,customer_id) values(to_date(:0,'dd/mm/yyyy'),to_date(:1,'dd/mm/yyyy'),:2)";
        const params1 = [
            data.check_indate,
            data.check_outDate,
            data.customer_id,
        ];
        let result1 = await this.sqlQuery(query1, params1);
        const query2="SELECT max(BOOKING_ID) as booking_id from BOOKING";
        const params2=[];
        let result2=await this.sqlQuery(query2,params2);
        var map=new Map();
        for(var r in data.booked_rooms){
            var row=data.booked_rooms[r];
                map.set(row.room_type,row.quantity);

        }
        var booked_rooms=[];
        var cost=0;
       var HotelRooms=data.hotelRooms;
        pdfDoc.text(`Booking ID:${result2.data[0].BOOKING_ID}`, { align: 'right'})
        pdfDoc.text(`customer ID:${data.customer_id}`, { align: 'right'})

        pdfDoc
            .fillColor('blue')
            .fontSize(17)
            .text("Booked Rooms", 150, 150);

       for(var r in HotelRooms){
           var row=HotelRooms[r].room_type;
           if(map.get(row)!=0){
               pdfDoc.text(`Room Type:${row}`, { align: 'left'})
               pdfDoc.text(`Room ids:`, { align: 'centre'})
               var quantity=map.get(row);
               var cnt=0;
               for(var r2 in HotelRooms[r].room_ids){
                   if(cnt==quantity) break;
                   var row2=HotelRooms[r].room_ids[r2];
                   const query3="insert into booked values(:0,:1,:2)";
                   const params3=[result2.data[0].BOOKING_ID,HotelRooms[r].hotel_id,row2];
                   let result3=await this.sqlQuery(query3,params3);
                   booked_rooms.push(row2);
                   pdfDoc.text(`${row2}`, { align: 'centre'})
                   cnt++;
               }
           }

       }

        pdfDoc.text("Services:", { align: 'left'})
        for(var r in data.services){
            var row=data.services[r];
            if(row.quantity!=0){
                const query4="insert into took values(:0,:1)";
                const params4=[result2.data[0].BOOKING_ID,row.id];
                let result4=await this.sqlQuery(query4,params4);
                pdfDoc.text(`${row.id}`, { align: 'left'})
            }
        }
        var today=new Date();
        var date=today.getDate()+"/"+((today.getMonth())+1)+"/"+today.getFullYear();
        const query5="insert into payment (payment_method,card_phone_number,booking_id,ammount,payment_date) values(:0,:1,:2,:3,sysdate)";
        const params5=[data.payMethod,data.payNumber,result2.data[0].BOOKING_ID,data.cost];
        let result5=await this.sqlQuery(query5,params5);

        pdfDoc.text(`Total Ammount:${data.cost}`, { align: 'left'})
        pdfDoc.end();

        console.log("9");
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mytour661@gmail.com',
                pass: 'C##MyTour123456'
            }
        });
        var mailOptions = {
            from: 'mytour661@gmail.com',
            to:data.mail,
            subject: 'verification mail',
            text:"that not eassy",
            attachments: [{
                filename: 'BookingMemo.pdf',
                path: 'F:/2-2_Database_project/MyTour/MyTour/Backend/BookingMemo.pdf',
                contentType: 'application/pdf'
            }]
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        return {
            success: true,
        };
    };
}
module.exports = BookRepository;
