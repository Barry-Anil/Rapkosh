import WordModel from "../models/Word.js";

class WordController{
    static getAllDoc = async (req, res ) => {
        try {
            const result = await WordModel.find();
            console.log(result)
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }
}

export default WordController;