const express = require("express");
const multer = require("multer");
const db = require("../db");
const fs = require("fs");
const routerPosteos = express.Router();

const upload = multer({
  dest: "upload/",
});

routerPosteos.get("/posteos", async (req, res) => {
  const connection = await db.getConnection();
  try {
    const result = await connection.query("SELECT * FROM feed;");
    res.status(200).json(result);
  } catch (error) {
    console.error("Error en la consulta:", error);
    res.status(500).json({ error: "Error en la consulta" });
  }
});

routerPosteos.post(
  "/posteos",
  upload.single("imageUpLoading"),
  async (req, res) => {
    const connection = await db.getConnection();
    const { username, like } = req.body;
    const originalName = saveImage(req.file);
    console.log(req.file);
    console.log(originalName);
    let imagenurl = `http://localhost:3001/${originalName}`;
    try {
      await connection.query(
        `INSERT INTO feed (username,urlImage,likes) VALUES (?,?,?)`,
        [username, imagenurl, like]
      );
      res.status(200).json({ message: "its ok" });
    } catch (error) {
      console.error(error);
      await connection.end();
      res.status(500).json({ error: "error in query" });
    }
  }
);
const saveImage = (file) => {
  const newPath = `./upload/${file.originalname}`;
  fs.renameSync(file.path, newPath);
  let originalNamefile = file.originalname;
  console.log(`originalNamefile ${originalNamefile}`);
  return originalNamefile;
};

module.exports = routerPosteos;
