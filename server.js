//SERVER
// console.log("Hello world");

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/route")
app.use(express.json());
app.use("/", routes);
// db connection
mongoose
    .connect("mongodb+srv://sahilraikar2439:KA30L2439@cluster0.hgps8ko.mongodb.net/validation")
    .then(() => {
        console.log("DB CONNECTED");

    })
    .catch((err) => {
        console.log(err, "something went wrong 😥");
    });

app.get("/test", (req, res) => {
    res.send("hello dj");
});

app.listen(4000, () => {
    console.log("server is connected 😮");
});