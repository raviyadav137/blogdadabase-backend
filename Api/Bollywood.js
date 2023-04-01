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
        const result = await mongoClient.findFromDB(collectionName);
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

module.exports = { bollywoodDataInsertToDb, bollywoodDataFindFromDb }