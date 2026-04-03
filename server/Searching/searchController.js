const SearchRepository = require("./searchRepository");
const path = require("path");
const searchRepository = new SearchRepository();
class SearchController {
  constructor() {}
  address = async (req, res) => {
    let result = await searchRepository.address(req.body);
    console.log(result, "in search controller address");
    if (result.success) {
      res.send({
        status:"success",
       hotels:result.data
      })

    } else {
      res.send({
        status:"notsuccess",
        error:result.error
      })
    }
  };
  toprated=async(req,res)=>{
    let result = await searchRepository.toprated(req.body);
    console.log(result, "in search controller address");
    if (result.success) {
      res.send({
        status:"success",
        hotels:result.data
      })

    } else {
      res.send({
        status:"notsuccess",
        error:result.error
      })
    }
  }
}

module.exports = SearchController;
