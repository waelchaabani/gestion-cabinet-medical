import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CertificatSchema = new Schema({
    CodeCertificat: {
        type:Number,
        required: 'Enter the ID of the Certificat'
    },
    NumfichePatient: {
        type:Number,
        required: 'Enter  Num de fiche de patient '
    },
    NombreJour: {
        type: String,
        required: 'Enter the Nombre jour of the Certificat'
    },
    
    

});


module.exports= mongoose.model('Certificat', CertificatSchema);
