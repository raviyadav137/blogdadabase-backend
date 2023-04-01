
const {Hollywood} = require("../model/blog");

const hollywoodDataInsertToDb = async(req, res) => {
    const hollywoodData = req.body;


    try {

        const hollywoodInfo = new Hollywood({
            img: hollywoodData.img,
            title: hollywoodData.title,
            description: hollywoodData.description,
            directedBy: hollywoodData.directedBy
        })
    
        const dbResponse = await hollywoodInfo.save();
        console.log("Data is saved =>", dbResponse)
        return res.status(200).send({message: "Data is saved"})
    } catch(err) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}

const hollywoodDataFindFromDb = async(req, res) => {

    try {
        const dbResponse = await Hollywood.find({});
        console.log("Data is saved =>", dbResponse)
        return res.status(200).send(dbResponse)
    } catch(err) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}

module.exports = { hollywoodDataInsertToDb, hollywoodDataFindFromDb } 