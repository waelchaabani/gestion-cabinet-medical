import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ConsultationSchema = new Schema({
    NumConsultation: {
        type:Number,
        required: 'Enter the ID of the Consultation'
    },
   
    DateConsultation: {
        type:Date,
        required: 'Enter the Date of Consultation of the Patient'
    },
    
    Diagnostic: {
        type: String,
        required: 'Enter the Diagnostic of the Patient'
    },
    patient: {

        type: Schema.Types.ObjectId, ref:'Patient'
  },
  rdvs:[{

    type: Schema.Types.ObjectId, ref:'RDV'
}],
ordonnances:[{

    type: Schema.Types.ObjectId, ref:'Ordonnacement'
}]
});
module.exports= mongoose.model('Consultation', ConsultationSchema);
