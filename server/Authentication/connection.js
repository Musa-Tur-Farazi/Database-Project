const oracledb = require('oracledb');
oracledb.autoCommit = true;
oracledb.outFormat = oracledb.OBJECT;
class Repository{
    constructor() {
        this.connection=undefined;
    }

    sqlQuery=async function(query,params){
        if (this.connection === undefined) {
            this.connection = await oracledb.getConnection({
                user: "c##MyTour",
                password: "123456",
                connectionString: "localhost/orcl"
            });
            console.log("Successfully connected to Oracle Database");
        }
        console.log("After connection to Oracle Database");

        try {
            let result = await this.connection.execute(query, params);
            return {
                success:true,
                data: result.rows
            }

        } catch (error) {
            console.log(error);
            return {
                success:false,
                error
            }
        }
    }
}

module.exports=Repository