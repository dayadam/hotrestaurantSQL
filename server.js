require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();
const db = require("./models");

//configure our middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

//
require("./routes/api-routes.js")(app);


//sync models to database
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("listening at http://localhost:" + PORT);
    })
});
//listen for requests