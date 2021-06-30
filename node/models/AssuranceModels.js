import mongoose from "mongoose";
const Schema =mongoose.Schema;
const AssuranceSchema = new Schema({
    nom:{
        type:String,
        required:"Entrer l' ID du  l'Assurance"
    },
    typeAssurance :{
        type:String,
        required:"Entrer le type du l'Assurance"
    },
    datevaluation:{
        type:Date,
        required:"Enter la date de l'Assurance "
    },
    Patient:{
        type:Schema.Types.ObjectId, ref:'Patient'

       
}
});
 module.exports= mongoose.model("Assurance", AssuranceSchema);

