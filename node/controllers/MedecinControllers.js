/*import mongoose from 'mongoose';
let Student = mongoose.model('Studeunt');*/
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const MedecinModel = require("../models/MedecinModels")
import serve from 'koa-static-folder';

import multer from 'multer'
import mime from 'mime-types'
import fs from 'fs'
import { createReadStream } from 'fs';
exports.findimage = async (ctx, next) => {

    serve(__dirname + "/uplaods/pheonix.jpg")
    //ctx.type = 'image/png';
    //ctx.body = createReadStream('https://itgate-group.com/wp-content/uploads/2018/12/LOGO-itgate-group-800x400.jpg');
};
exports.findMedecin = async (ctx, next) => {
    try {
        let Medecin = await MedecinModel.find({});
        ctx.body = Medecin;
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.findMedecinbyId = async (ctx, next) => {
    try {
        let Medecin = await MedecinModel.findById({ _id: ctx.params.id });
        ctx.body = Medecin;
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.addMedecin = async (ctx, next) => {
    try {
        let new_Medecin = new MedecinModel(ctx.request.body)
        await new_Medecin.save();
        ctx.body = new_Medecin;
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.removeMedecin = async (ctx, next) => {
    try {
        let Medecin = await MedecinModel.remove({ _id: ctx.params.MedecinId });
        ctx.body = { message: 'Medecin successfully deleted' };
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.updateMedecin = async (ctx, next) => {
    try {
        let Medecin = await MedecinModel.findOneAndUpdate({ _id: ctx.params.MedecinId }, ctx.request.body, { new: true });
        ctx.body = Medecin
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};






exports.addPatient = async (ctx, next) => {
    try {

        console.log(ctx.request.body.patient)
        console.log(ctx.request.body.medecin)

        let Medecin = await MedecinModel.update({ _id: ctx.request.body.medecin }, { $push: { patients: ctx.request.body.patient } });
        ctx.body = Medecin;

    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }

};
exports.addRDV = async (ctx, next) => {
    try {

        console.log(ctx.request.body.rdv)
        console.log(ctx.request.body.medecin)

        let Medecin = await MedecinModel.update({ _id: ctx.request.body.medecin }, { $push: { rdv: ctx.request.body.rdv } });
        ctx.body = Medecin;

    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }

};
exports.addPayment = async (ctx, next) => {
    try {

        console.log(ctx.request.body.payment)
        console.log(ctx.request.body.medecin)

        let Medecin = await MedecinModel.update({ _id: ctx.request.body.medecin }, { $push: { payment: ctx.request.body.payment } });
        ctx.body = Medecin;

    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }

};
exports.loginm = async (ctx, next) => {
    try {
        await MedecinModel.findOne({ email: ctx.request.body.email }, function (err, medecinInfo) {

            if (err) {
                next(err);

            } else {
                if (bcrypt.compareSync(ctx.request.body.password, medecinInfo.password)) {
                    const token = jwt.sign({ id: medecinInfo._id }, "wael", { expiresIn: '1h' });
                    ctx.body = { status: "success", message: "medecin found!!!", data: { medecin: medecinInfo, token: token } };
                } else {
                    ctx.body = { status: "error", message: "Invalid email/password!!!", data: null };
                }
            }

        }).populate("role").populate("patients").populate("rdv").populate("payment");

    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
},



    exports.registerm = async (ctx, next) => {


        try {


            const { path, name, type } = ctx.request.files.avatar
            const fileExtension = mime.extension(type)

            console.log("path ", path)
            ctx.request.body["image"] = name
            await fs.copyFileSync(path, "uploads/" + name)
            let new_Medecin = new MedecinModel(ctx.request.body)
            await new_Medecin.save();

            ctx.body = {
                success: false,
                message: 'This is not image file',
                medecin: new_Medecin
            }
        } catch (err) {
            console.log(`error ${err.message}`)
            ctx.body = {
                success: false,
                message: err.message,
                photo: ""
            }
        }
    };