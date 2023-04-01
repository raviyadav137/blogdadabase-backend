const mongoose = require("mongoose");

const url = "mongodb+srv://rabiyadav137:rabiyadav137@cluster0.1r4850f.mongodb.net/BlogProject?retryWrites=true&w=majority";

const connect = async() => {
    try {
        console.log("Connecting to db...")
        const dbConn = await mongoose.connect(url);
        console.log("connection sucessfull");
    } catch(error) {
        console.log("Error in coneccting db")
    }
}

module.exports = connect;