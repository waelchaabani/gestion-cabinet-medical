import mongoose from "mongoose";
///let UserModel=mongoose.model("user");
const RoleModel=require("../models/RoleModels");
exports.findRole = async(ctx,next)=>
{
    try{
        let Role =await RoleModel.find({});
        ctx.body =Role}
    catch(err){
        ctx.status=err.status || 500;
        ctx.body=err.message;

    }
};
exports.addRole= async(ctx,next)=>{
    try{
        let  new_Role =new RoleModel(ctx.request.body);
        await new_Role.save();
        ctx.body = new_Role;
    }
    catch(err){
        ctx.status=err.status || 500;
        ctx.body=err.message;

    }
    
   }

  

