import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const OrdonnancementSchema = new Schema({
   
    NumOrdonnancement: {
        type:Number,
        required: 'Enter the Nombre de fois par jour of Medicaments'
    },
    DateOrdonnancement: {
        type:Date,
        required: 'Enter the Nombre de fois par jour of Medicaments'
    },
   
    nameofdoctor: {
        type:String,
        required: 'Enter the Nombre de fois par jour of Medicaments'
    },
  firstname: {
        type:String,
        required: 'Enter the NUM-Ordonnancement of the Patient'
    },
   
    lastname: {
        type:String,
        required: 'Enter the Descreption of the Patient'
    },
    medicament: {
        type:String,
        required: 'Enter the Descreption of the Patient'
    },
    Nombrefoisparjour: {
        type:Number,
        required: 'Enter the Descreption of the Patient'
    },
   age: {
        type:Number,
        required: 'Enter the Descreption of the Patient'
    },
    description: {
        type:String,
        required: 'Enter the Descreption of the Patient'
    },
    consultation:{

        type: Schema.Types.ObjectId, ref:'Consultation'
  }

});
module.exports= mongoose.model('Ordonnancement', OrdonnancementSchema);