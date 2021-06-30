import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const StudentSchema = new Schema({
    name: {
        type: String,
        required: 'Enter the name of the student'
    },
    age: {
        type: Number,
        required: 'Enter the age of the student'
    },

    email:{
        type:String,
        required:'Entrer the Email of student'
    },
    password:{
        type:String,
        required:'Entrer the psw of student'
    },
    phone:{
        type:Number,
        required:'Entrer the phone of student'
    },
    role:{

        type: Schema.Types.ObjectId, ref:'Role'
  },
  medecin:{

    type: Schema.Types.ObjectId, ref:'Medecin'
},

 
});
StudentSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
    });
    
module.exports= mongoose.model('User', StudentSchema);