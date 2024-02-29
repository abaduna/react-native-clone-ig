const mysql  = require("promise-mysql")

//instagram

const connection = mysql.createConnection({
    host:"localhost",
    database:"instagram",
    user:"root",
    password:"1234"
})
const getConnection = async ()=> await connection;

module.exports ={
    getConnection
}