const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const multer = require("multer")

const app = express()

const upload = multer({
    dest: "upload/",
  });
  
  app.use( express.static("upload"));

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

const routerPosteos = require("./router/router-posteos.js")

app.use("/api",routerPosteos)

app.listen(3001,()=>{
    console.log("run by port 3001");
})