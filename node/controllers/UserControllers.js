/*import mongoose from 'mongoose';
let Student = mongoose.model('Studeunt');*/
const UserModel=require("../models/UserModels")
const bcrypt = require('bcrypt'); 
const jwt=require('jsonwebtoken');
exports.findAllUser = async (ctx, next) => {
    try {
        let student = await UserModel.find({}).populate("role");
        ctx.body = student;
    } catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.findUserbyId = async (ctx, next) => {
    try {
        let User = await UserModel.findById({_id:ctx.params.id});
        ctx.body = User;
    } catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.addAllUser = async (ctx, next) => {
    try {
        let new_user = new UserModel(ctx.request.body)
        await new_user.save();
        ctx.body=new_user;
    } catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.removeUsers=async(ctx,next)=>{
try{
    let user=await UserModel.remove({_id:ctx.params.userId});
    ctx.body={message:'User successfully deleted'};
}catch (err) {              
    ctx.status = err.status || 500;
    ctx.body = err.message;
}
};

exports.updateUsers=async(ctx,next)=>{
            try{
                let user=await UserModel.findOneAndUpdate({_id:ctx.params.userId},ctx.request.body, {new: true});
                ctx.body=user
            }catch (err) {              
                ctx.status = err.status || 500;
                ctx.body = err.message;
            }
        
};

exports.login=async(ctx,next)=>{
    try{
    await UserModel.findOne({email:ctx.request.body.email}, function(err, userInfo){
        if (err) {
         next(err);

        } else {
   if(bcrypt.compareSync(ctx.request.body.password, userInfo.password)) {
   const token = jwt.sign({id: userInfo._id}, "wael" ,{ expiresIn: '1h' });
   ctx.body={status:"success", message: "user found!!!", data:{user: userInfo, token:token}};
   }else{
   ctx.body={status:"error", message: "Invalid email/password!!!", data:null};
   }
        }
        
       }).populate("role").populate({ 
        path: 'medecin',
        populate: {
          path: 'patients',
          model: 'Patient'
        } 
     }).populate({ 
        path: 'medecin',
        populate: {
          path: 'rdv',
          model: 'RDV'
        }
    }).populate({ 
            path: 'medecin',
            populate: {
              path: 'payment',
              model: 'Payment'
            } 
     });

    }catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
    },

    

exports.register=async(ctx,next)=>{
    console.log(ctx.request.body)   
     try{
        let user= UserModel(ctx.request.body);
       await user.save();
        ctx.body=user
    }catch (err) {              
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }

};