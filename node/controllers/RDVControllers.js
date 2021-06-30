/*import mongoose from 'mongoose';
let Student = mongoose.model('Studeunt');*/
const RDVModel=require("../models/RDVModels")
exports.findRDV = async (ctx, next) => {
    try {
        let RDV = await RDVModel.find({});
        ctx.body = RDV;
    } catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.findRDVbyId = async (ctx, next) => {
    try {
        let RDV = await RDVModel.findById({_id:ctx.params.id});
        ctx.body = RDV;
    } catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.addRDV = async (ctx, next) => {
    try {
        let new_RDV = new RDVModel(ctx.request.body)
        await new_RDV.save();
        ctx.body=new_RDV;
    }
    catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }

};

exports.removeRDV=async(ctx,next)=>{
try{
    let RDV=await RDVModel.remove({_id:ctx.params.RDVId});
    ctx.body={message:'RDV successfully deleted'};
}catch (err) {              
    ctx.status = err.status || 500;
    ctx.body = err.message;
}
};
exports.updateRDV=async(ctx,next)=>{
    try{
        let RDV=await RDVModel.findOneAndUpdate({_id:ctx.params.RDVId},ctx.request.body, {new: true});
        ctx.body=RDV
    }catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
    };


