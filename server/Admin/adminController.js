const AdminRepository = require("./adminRepository");
const path = require("path");
const axios = require("axios");
const adminRepository = new AdminRepository();

class AdminController {
    constructor() {}
    adminFirstPage = async (req, res) => {
        let result = await adminRepository.adminFirstPage(req.body);
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
    adminHotelDetails = async (req, res) => {
        let result = await adminRepository.adminHotelDetails(req.body);
        console.log(result, "in admin controller adminFirst");
        if (result.success) {
            res.send({
                status:"success",
                data1:result.data1,
                data2:result.data2
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
    updateType = async (req, res) => {
        let result = await adminRepository.updateType(req.body);
        console.log(result, "in admin controller adminFirst");
        if (result.success) {
            res.send({
                status:"success",
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
    addType = async (req, res) => {
        let result = await adminRepository.addType(req.body);
        console.log(result, "in admin controller adminFirst");
        if (result.success) {
            res.send({
                status:"success",
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
    addRoom = async (req, res) => {
        let result = await adminRepository.addRoom(req.body);
        console.log(result, "in admin controller adminFirst");
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
    discardRoom = async (req, res) => {
        let result = await adminRepository.discardRoom(req.body);
        console.log(result, "in admin controller adminFirst");
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
    adminService = async (req, res) => {
        let result = await adminRepository.adminServiceDetails(req.body);
        console.log(result, "in admin controller adminservice");
        if (result.success) {
            res.send({
                status:"success",
                data1:result.data1,
                data2:result.data2
            })
        } else {
            res.send({
                status:"notSuccess",
                error:result.error
            })
        }
    };
    freeAdd = async (req, res) => {
        let result = await adminRepository.addFreeService(req.body);
        console.log(result, "in admin controller free add");
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
    paidAdd = async (req, res) => {
        let result = await adminRepository.addPaidService(req.body);
        console.log(result, "in admin controller adminservice");
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
    updateservice = async (req, res) => {
        let result = await adminRepository.updateService(req.body);
        console.log(result, "in admin controller adminservice");
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
    deleteService = async (req, res) => {
        let result = await adminRepository.discardService(req.body);
        console.log(result, "in admin controller adminservice");
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
    reservation = async (req, res) => {
        let result = await adminRepository.reservationList(req.body);
        console.log(result, "in admin controller adminservice");
        if (result.success) {
            res.send({
                status:"success",
                data:result.data
            })
        } else {
            res.send({
                status:"notSuccess",
                error:result.error
            })
        }
    };
    profileUpdate = async (req, res) => {
        console.log("ehy not runnig");
        let result = await adminRepository.profileUpdate(req.body);
        console.log(result, "in admin controller profile");
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

module.exports = AdminController;
