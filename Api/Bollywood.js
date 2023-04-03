const {Bollywood} = require("../model/blog");
const collectionName = "bollywood";

const bollywoodDataInsertToDb = async(req, res) => {
    const bollywoodData = req.body;
   
    try {

        const bollywoodInfo = new Bollywood({
            img: bollywoodData.img,
            title: bollywoodData.title,
            description: bollywoodData.description,
            category: bollywoodData.category
        })
    
        const dbResponse = await bollywoodInfo.save();
        console.log("Data is saved =>", dbResponse)
        return res.status(200).send({message: " info saved"})
    } catch(err) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}

const bollywoodDataFindFromDb = async(req, res) => {
    try {
        const dbResponse = await Bollywood.find({});
        console.log("Data is saved =>", dbResponse)
        return res.status(200).send(dbResponse)
    } catch(err) {
        console.log("Error while oprating on db =>", err.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}


module.exports = { bollywoodDataInsertToDb, bollywoodDataFindFromDb }