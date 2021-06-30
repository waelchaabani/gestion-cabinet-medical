import mongoose from "mongoose";
const Schema =mongoose.Schema;
const RoleSchema = new Schema({
    name:{
        type:String,
        required:"Entrer le nom"
    },
    description :{
        type:String,
        required:"Entrer le type du l'Role"
    },
   
});
 module.exports= mongoose.model("Role", RoleSchema);

