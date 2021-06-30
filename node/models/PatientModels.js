import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;



const PatientSchema = new Schema({
    firstname: {
        type: String,
        required: 'Enter the firstname of the Patient'
    },

    Lastname: {
        type: String,
        required: 'Enter the lastname of the Patient'
    }, 
    
    email: {
        type: String,
        required: 'Enter the email of the Patient'
    },
    password: {
        required :true,
        type: String,
        required: 'Enter the password of the Patient'
    },

    DateofBirth: {
        type:Date,
        required: 'Enter the DateofBirth of the Patient'
    },
    sexegender: {
        type:String,
        required: 'Enter the gender of the Patient'
    },
    
    age: {
        type: Number,
        required: 'Enter the age of the Patient'
    },
    address: {
        type:String,
        required: 'Enter the address of the Patient'
    },
    
    phone:{
        type:Number,
        required:'Entrer the phone of Patient'
    },
    image:{
        type:String,
        required:'Entrer the image of Patient'
    },
   
   
    consultations:[{

        type: Schema.Types.ObjectId, ref:'Consultation'
  }],
  

 
});
PatientSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
    });

module.exports= mongoose.model('Patient', PatientSchema);