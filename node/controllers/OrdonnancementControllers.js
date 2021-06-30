/*import mongoose from 'mongoose';
let Student = mongoose.model('Studeunt');*/
const OrdonnancementModel=require("../models/OrdonnancementModels")
exports.findOrdonnancement = async (ctx, next) => {
    try {
        let Ordonnancement = await OrdonnancementModel.find({});
        ctx.body = Ordonnancement;
    } catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.findOrdonnancementbyId = async (ctx, next) => {
    try {
        let Ordonnancement = await OrdonnancementModel.findById({_id:ctx.params.id});
        ctx.body = Ordonnancement;
    } catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.addOrdonnancement = async (ctx, next) => {
    try {
        let new_Ordonnancement = new OrdonnancementModel(ctx.request.body)
        await new_Ordonnancement.save();
        ctx.body=new_Ordonnancement;
    } catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.removeOrdonnancement=async(ctx,next)=>{
try{
    let Ordonnancement=await OrdonnancementModel.remove({_id:ctx.params.OrdonnancementId});
    ctx.body={message:'Ordonnancement successfully deleted'};
}catch (err) {              
    ctx.status = err.status || 500;
    ctx.body = err.message;
}
};
exports.updateOrdonnancement=async(ctx,next)=>{
    try{
        let Ordonnancement=await OrdonnancementModel.findOneAndUpdate({_id:ctx.params.OrdonnancementId},ctx.request.body, {new: true});
        ctx.body=Ordonnancement
    }catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
    };


