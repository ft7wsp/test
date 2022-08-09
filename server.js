require("dotenv").config();
const express = require("express");

const app = express();
const httpServer = require("http").createServer(app);

const db = require("./app/models");

// parse body params and attache them to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;

async function initial() {
  //hathé l tala3 les tabs, lazem tasna3 il bd manauelly mara lawla
  await db.sequelize.sync();

  console.log("Connected to database");
}

//handling routes




initial().then(() => {
  httpServer.listen(PORT, () => {
    console.log(`listening on :${PORT}`);
  });
});
