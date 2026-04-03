const AuthRepository = require("./authRepository");
const path = require("path");
const axios = require("axios");
const authRepository = new AuthRepository();

class AuthController {
    constructor() {}
    register = async (req, res) => {
        let result = await authRepository.register(req.body);
        console.log(result, "in auth controller sign up");
        if (result.success) {
            res.status(200).json({
                success: true,
                data:result
                //need to show that successfully registered
            });
        } else {
            switch (result.error) {
                case process.env.ERROR_EMAIL_EXISTS:
                    res.status(401).json({
                        success: false,
                    });
                    break;
            }
        }
    };
    loginadmin = async (req, res) => {
        //console.log(req.body);
        let result = await authRepository.loginadmin(req.body);
        console.log(result);
        if (result.success) {
            res.send({
                status:"success",
                username:result.username,
                user_id:result.user_id
            })
        } else {
            res.send({
                status:"notsuccess",
                error:result.error
            })
        }
    };

    loginuser = async (req, res) => {
        //console.log(req.body);
        let result = await authRepository.loginuser(req.body);
        console.log(result);
        if (result.success) {
            res.send({
                status:"success",
                username:result.username,
                user_id:result.user_id
            })
        } else {
            res.send({
                status:"notsuccess",
                error:result.error
            })
        }
    };
    contact = async (req, res) => {
        //console.log(req.body);
        let result = await authRepository.contact(req.body);
        console.log(result);
        if (result.success) {
            res.send({
                status:"success",
            })
        } else {
            res.send({
                status:"notsuccess",
                error:result.error
            })
        }
    };
}

module.exports = AuthController;
