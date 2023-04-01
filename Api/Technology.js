const {Technology} = require("../model/blog"); 

const technologyDataInsertToDb = async(req, res) => {
    const technologyData = req.body;

    try {

        const technologyInfo = new Technology({
            img: technologyData.img,
            title: technologyData.title,
            description: technologyData.description,
            category:technologyData.category
        })
    
        const dbResponse = await technologyInfo.save();
        console.log("Data is saved =>", dbResponse)
        return res.status(200).send({message: "Data is saved"})
    } catch(err) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}

const technologyDataFindFromDb = async(req, res) => {
  
    try {
        const dbResponse = await Technology.find({});
        console.log("Data is saved =>", dbResponse)
        return res.status(200).send(dbResponse)
    } catch(err) {
        console.log("Error while oprating on db =>", error.message);
        return res.status(500).send({message: "Error while operating on db"})
    }
}

module.exports = { technologyDataInsertToDb, technologyDataFindFromDb }