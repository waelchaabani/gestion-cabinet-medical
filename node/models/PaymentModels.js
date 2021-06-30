import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
    accountname: {
        type:String,
        required: 'Enter the name of the Patient'
    },
    description: {
        type:String,
        required: 'Enter the description of the Patient'
    },
    type:{
        type:String,
        required: 'Enter the  type of the Patient'
    },
    datepayment:{
        type:Date,
        required: 'Enter the  type of the Patient'
    },
    amount:{
        type:Number,
        required: 'Enter the  type of the Patient'
    },
    Medecin: {

        type: Schema.Types.ObjectId, ref:'Madecin'
  },
    
});
module.exports= mongoose.model('Payment', PaymentSchema);