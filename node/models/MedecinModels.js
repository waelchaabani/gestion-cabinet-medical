import mongoose from 'mongoose';
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Schema = mongoose.Schema;

const MedecinSchema = new Schema({
    firstname: {
        type: String,
        required: 'Enter the firstname of the doctor'
    },
    Lastname: {
        type: String,
        required: 'Enter the lastname of the doctor'
    },

    email: {
        type: String,
        required: 'Enter the email of the doctor'
    },
    password: {
        type: String,
        required: 'Enter the password of the doctor'
    },
    speciality: {
        type: String,
        required: 'Enter the speciality of the doctor'
    },
    address: {
        type: String,
        required: 'Enter the adress of the doctor'
    },

    phone: {
        type: Number,
        required: 'Entrer the phone of doctor'
    },
    image: {
        type: String,
        required: 'Entrer the image of Patient'
    },

    consultations: [{

        type: Schema.Types.ObjectId, ref: 'Consultation'
    }],
    patients: [{

        type: Schema.Types.ObjectId, ref: 'Patient'
    }],
    role: {

        type: Schema.Types.ObjectId, ref: 'Role'
    },
    rdv: [{
        type: Schema.Types.ObjectId, ref: 'RDV'
    }],
    payment: [{
        type: Schema.Types.ObjectId, ref: 'Payment'
    }]

});
MedecinSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});
module.exports = mongoose.model('Medecin', MedecinSchema);