const Repository = require("./connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var nodemailer=require("nodemailer");
const axios = require("axios");
const router = require("../app");
const tokenExpiryDuration = 86400;
var test=()=>{
    success:true
}
class AuthRepository extends Repository {
    constructor() {
        super();
    }

    register = async (data) => {
        /// check for unique email

        const query1 = "select * from customer where mail = :0";
        const params1 = [data.mail];
        const result1 = await this.sqlQuery(query1, params1);
        console.log(result1, "in sign up in auth repository");
        if (result1.data.length>0) {
            console.log("here problem in authRepository");
            return {
                success: false,
                error: "Email already exist"
               // process.env.ERROR_EMAIL_EXISTS,
            };
        }

        console.log(data);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mytour661@gmail.com',
                pass: 'C##MyTour123456'
            }
        });
        var identifier=514;
        console.log("in mail sending "+identifier);
        var mailOptions = {
            from: 'mytour661@gmail.com',
            to: data.mail,
            subject: 'verification mail',
            html: '<p>Click <a href="http://localhost:8080/verification/'+identifier +'">here</a> to activate your account</p>',
            text:"that not eassy"
        };
        
        console.log("Yp : " + data.mail),
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
         console.log("why not sending mail");

        var res=await axios.get(`https://localhost:8080/verification/${identifier}`);
        console.log("axios done");
        console.log(res);
        if(res.data.success){
            console.log("succesfully emailed");
            const query =
                "insert into customer (name,city,streetname,country,phonenumber,mail,password) values (:0,:1,:2,:3,:4,:5,:6)";
            const params = [
                data.username,
                data.city,
                data.street,
                data.country,
                data.phoneNumber,
                data.mail,
                data.password,
            ];
            const result = await this.sqlQuery(query, params);
            console.log(result, "in sign up in auth repository cls");
        return result;
        }
    };

    loginadmin = async (data) => {
        console.log(data);
        const query = "select * from admin where mail = :0 and password= :1";
        const params = [data.mail, data.password];
        const result = await this.sqlQuery(query, params);

        console.log(result, "in sign in in auth repository");
        if (result.data.length == 0) {
            return {
                success: false,
                error: "Email and password doesn't match "
                //process.env.ERROR_EMAIL_AND_PASSWORD_DOES_NOT_MATCH,
            };
        }
        else
            return {
                success: true,
                username:result.data[0]['NAME'],
                user_id:result.data[0]['CUSTOMER_ID']

            };
    };
    loginuser = async (data) => {
        console.log(data);
        const query = "select * from customer where mail = :0 and password= :1";
        const params = [data.mail, data.password];
        const result = await this.sqlQuery(query, params);

        console.log(result, "in sign in in auth repository");
        if (result.data.length == 0) {
            return {
                success: false,
                error: "Email and password doesn't match "
                //process.env.ERROR_EMAIL_AND_PASSWORD_DOES_NOT_MATCH,
            };
        }
        else
            return {
                success: true,
                username:result.data[0]['NAME'],
                user_id:result.data[0]['CUSTOMER_ID']

            };
    };

    contact= async (data) => {

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mytour661@gmail.com',
                pass: 'C##MyTour123456'
            }
        });

        var mailOptions = {
            from: 'mytour661@gmail.com',
            to: "musatur330@gmail.com",
            subject: 'verification mail',
            text:data.mail+" sent you"+ data.txt
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
module.exports = AuthRepository;
