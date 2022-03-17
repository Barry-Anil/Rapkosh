import mongoose from "mongoose";

//Define Schema
const wordSchema = new mongoose.Schema({
    mainWord : {type:String, required:true, trim:true},
    rhymeWord : {type:String, required:true, trim:true},
})

//Model 
const WordModel = mongoose.model('word', wordSchema)

export default WordModel;

