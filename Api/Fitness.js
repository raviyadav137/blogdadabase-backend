const {Fitness} = require("../model/blog");

const fitnessDataInsertToDb = async(req, res) => {
    const fitnessData = req.body;
  

    try {

        const fitnessInfo = new Fitness({
            img: fitnessData.img,
            title: fitnessData.title,
            description: fitnessData.description
        })
    
        const dbResponse = await fitnessInfo.save();
        console.log("Data is saved =>", dbResponse)
        return res.status(200).send({message: "Data is saved"})
    } catch(err) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}

const fitnessDataFindFromDb = async(req, res) => {

    try {
        const dbResponse = await Fitness.find({});
        console.log("Data is saved =>", dbResponse)
        return res.status(200).send(dbResponse)
    } catch(err) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}

module.exports = { fitnessDataInsertToDb, fitnessDataFindFromDb } 