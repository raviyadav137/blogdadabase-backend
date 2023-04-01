const {Food} = require("../model/blog");

const foodDataInsertToDb = async(req, res) => {
    const foodData = req.body;
 
    try {

        const foodInfo = new Food({
            img: foodData.img,
            title: foodData.title,
            description: foodData.description
        })
    
        const dbResponse = await foodInfo.save();
        console.log("Data is saved =>", dbResponse)
        return res.status(200).send({message: "Data is saved"})
    } catch(err) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}

const foodDataFindFromDb = async(req, res) => {
   

    try {
        const dbResponse = await Food.find({});
        console.log("Data is saved =>", dbResponse)
        return res.status(200).send(dbResponse)
    } catch(err) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}

module.exports = { foodDataInsertToDb, foodDataFindFromDb } 