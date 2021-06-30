/*import mongoose from 'mongoose';
let Student = mongoose.model('Studeunt');*/
const ConsultationModel=require("../models/ConsultationModels")
exports.findConsultation = async (ctx, next) => {
    try {
        let Consultation = await ConsultationModel.find({});
        ctx.body = Consultation;
    } catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.addConsultation = async (ctx, next) => {
    try {
        let new_Consultation = new ConsultationModel(ctx.request.body)
        await new_Consultation.save();
        ctx.body=new_Consultation;
    } catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.removeConsultation=async(ctx,next)=>{
try{
    let Consultation=await ConsultationModel.remove({_id:ctx.params.ConsultationId});
    ctx.body={message:'Consultation successfully deleted'};
}catch (err) {              
    ctx.status = err.status || 500;
    ctx.body = err.message;
}
};
exports.updateConsultation=async(ctx,next)=>{
    try{
        let Consultation=await ConsultationModel.findOneAndUpdate({_id:ctx.params.ConsultationId},ctx.request.body, {new: true});
        ctx.body=Consultation
    }catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
    };


