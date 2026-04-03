const UserRepository = require("./userRepository");
const path = require("path");
const axios = require("axios");
const userRepository = new UserRepository();

class UserController {
    constructor() {}
    preBooking = async (req, res) => {
        let result = await userRepository.preBooking(req.body);
        console.log(result, "in admin controller adminFirst");
        if (result.success) {
            res.send({
                status:"success",
                data:result.data
            })
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
    futureBooking = async (req, res) => {
        let result = await userRepository.futureBooking(req.body);
        console.log(result, "in admin controller adminFirst");
        if (result.success) {
            res.send({
                status:"success",
                data:result.data
            })
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
    profileUpdate = async (req, res) => {
        let result = await userRepository.profileUpdate(req.body);
        console.log(result, "in user controller profile");
        if (result.success) {
            res.send({
                status:"success",
            })
        } else {
            res.send({
                status:"notSuccess",
                error:result.error
            })
        }
    };

}

module.exports = UserController;
