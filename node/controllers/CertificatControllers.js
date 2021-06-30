/*import mongoose from 'mongoose';
let Student = mongoose.model('Studeunt');*/
const CertificatModel=require("../models/CertificatModels")
exports.findCertificat = async (ctx, next) => {
    try {
        let Certificat = await CertificatModel.find({});
        ctx.body = Certificat;
    } catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.addCertificat = async (ctx, next) => {
    try {
        let new_Certificat = new CertificatModel(ctx.request.body)
        await new_Certificat.save();
        ctx.body=new_Certificat;
    } catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.removeCertificat=async(ctx,next)=>{
try{
    let Certificat =await CertificatModel.remove({_id:ctx.params.CertificatId});
    ctx.body={message:'Certificat successfully deleted'};
}catch (err) {              
    ctx.status = err.status || 500;
    ctx.body = err.message;
}
};
exports.updateCertificat=async(ctx,next)=>{
    try{
        let Certificat=await CertificatModel.findOneAndUpdate({_id:ctx.params.CertificatId},ctx.request.body, {new: true});
        ctx.body=Certificat
    }catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
    };


