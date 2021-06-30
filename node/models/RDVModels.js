import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RDVSchema = new Schema({
    name: {
        type:String,
        required: 'Enter the Num-RDV of the Patient'
    },
    email: {
        type:String,
        required: 'Enter the Num-RDV of the Patient'
    }, 
   
    
    DateRDV: {
        type: Date,
        required: 'Enter the Date-RDV of the Patient'
    },
    HeureRDV: {
        type: Number,
        required: 'Enter the hour-RDV of the Patient'
    },
   
    injury:{
        type:String,
        required:'Enter the injury of Patient'
    },
    consultation: {

          type: Schema.Types.ObjectId, ref:'Consultation'
    },
    Medecin: {

        type: Schema.Types.ObjectId, ref:'Madecin'
  },
  
});
module.exports= mongoose.model('RDV', RDVSchema);