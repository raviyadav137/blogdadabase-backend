const mongoose = require("mongoose");

const bollywoodSchema = new mongoose.Schema({
    img: String,
    title: String,
    description: String,
    category: String
});

const Bollywood = mongoose.model("bollywood", bollywoodSchema)
const fitnessSchema = new mongoose.Schema({
    img: String,
    title: String,
    description: String,
    category:String
});
const Fitness = mongoose.model("fitness", fitnessSchema)
const hollywoodSchema = new mongoose.Schema({
    img: String,
    title: String,
    description: String,
    category:String
});

const Hollywood = mongoose.model("hollywood", hollywoodSchema)

const foodSchema = new mongoose.Schema({
    img: String,
    title: String,
    description: String,
    category:String
});

const Food=mongoose.model("food",foodSchema)
const technologySchema = new mongoose.Schema({
    img: String,
    title: String,
    description: String,
    category:String
});

const Technology= mongoose.model("technology", technologySchema)

module.exports = {Bollywood,Fitness,Hollywood,Food,Technology};