import mongoose from "mongoose";
///let UserModel=mongoose.model("user");
const AssuranceModel=require("../models/AssuranceModels");
exports.findAssurance = async(ctx,next)=>
{
    try{
        let Assurance =await AssuranceModel.find({});
        ctx.body =Assurance}
    catch(err){
        ctx.status=err.status || 500;
        ctx.body=err.message;

    }
};
exports.addAssurance= async(ctx,next)=>{
    try{
        let  new_Assurance =new AssuranceModel(ctx.request.body);
        await new_Assurance.save();
        ctx.body = new_Assurance;
    }
    catch(err){
        ctx.status=err.status || 500;
        ctx.body=err.message;

    }
    
   }

   exports.removeAssurance= async(ctx,next)=>{
    try{
        let Assurance =await AssuranceModel.remove({_id:ctx.params.AssuranceId});
        ctx.body = {message:"Assurance successfully deleted"};
    }
    catch(err){
        ctx.status=err.status || 500;
        ctx.body=err.message;

    }

}
exports.updateAssurance= async(ctx,next)=>{
    try{
        let Assurance =await AssuranceModel.findOneAndUpdate({_id:ctx.params.AssuranceId},ctx.request.body, {new:true});
        ctx.body = Assurance;
    }
    catch(err){
        ctx.status=err.status || 500;
        ctx.body=err.message;

    }};
    