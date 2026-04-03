const BookRepository = require("./bookRepository");
const path = require("path");
const bookRepository = new BookRepository();
class BookController {
    constructor() {}
    booking = async (req, res) => {
        let result = await bookRepository.booking(req.body);
        console.log(result, "in book controller sign up");
        if (result.success) {
            res.send({
                status:"success"
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
        console.log("I lve");
    };
}

module.exports = BookController;
