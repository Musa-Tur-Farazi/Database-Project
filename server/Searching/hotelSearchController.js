const HotelSearchRepository = require("./hotelSearchRepository");
const path = require("path");
const hotelSearchRepository = new HotelSearchRepository();
class HotelSearchController {
    constructor() {

    }
    hotelDetail = async (req, res) => {
        let result = await hotelSearchRepository.hotelDetail(req.body);
        console.log(result, "in hotelsearch controller ");
        if (result.success) {
            res.send({
                status:"success",
                rooms:result.data,
                service:result.service
            })
            // res.status(200).json({
            //   success: true,
            //    data:result
            // });
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
}

module.exports = HotelSearchController;
