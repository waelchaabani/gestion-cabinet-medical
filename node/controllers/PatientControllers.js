/*import mongoose from 'mongoose';
let Student = mongoose.model('Studeunt');*/
const PatientModel = require("../models/PatientModels")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
///const serve = require('koa-static');
import serve from 'koa-static-folder';

import multer from 'multer'
import mime from 'mime-types'
import fs from 'fs'
import { createReadStream } from 'fs';


exports.findimage = async (ctx, next) => {

    serve(__dirname+"/uplaods/pheonix.jpg")
 //ctx.type = 'image/png';
 //ctx.body = createReadStream('https://itgate-group.com/wp-content/uploads/2018/12/LOGO-itgate-group-800x400.jpg');
};
exports.findPatient = async (ctx, next) => {
    try {
        let Patient = await PatientModel.find({});
        ctx.body = Patient;
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.findPatientbyId = async (ctx, next) => {
    try {
        let Patient = await PatientModel.findById({ _id: ctx.params.id });
        ctx.body = Patient;
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.addPatient = async (ctx, next) => {

    try {
        const { path, name, type } = ctx.request.files.avatar
        const fileExtension = mime.extension(type)

        console.log("path ", path)
        ctx.request.body["image"] = name
        await fs.copyFileSync(path, "uploads/" + name)
        let new_Patient = new PatientModel(ctx.request.body)
        await new_Patient.save();

        ctx.body = {
            success: false,
            message: 'This is not image file',
            patient: new_Patient
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
exports.removePatient = async (ctx, next) => {
    try {
        let Patient = await PatientModel.remove({ _id: ctx.params.PatientId });
        ctx.body = { message: 'Patient successfully deleted' };
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.updatePatient = async (ctx, next) => {
    try {
        let Patient = await PatientModel.findOneAndUpdate({ _id: ctx.params.PatientId }, ctx.request.body, { new: true });
        ctx.body = Patient
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
exports.loginp = async (ctx, next) => {
    try {
        await PatientModel.findOne({ email: ctx.request.body.email }, function (err, patientInfo) {
            if (err) {
                next(err);

            } else {
                if (bcrypt.compareSync(ctx.request.body.password, patientInfo.password)) {
                    const token = jwt.sign({ id: patientInfo._id }, "wael", { expiresIn: '1h' });
                    ctx.body = { status: "success", message: "user found!!!", data: { patient: patientInfo, token: token } };
                } else {
                    ctx.body = { status: "error", message: "Invalid email/password!!!", data: null };
                }
            }

        });

    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
},
exports.registerp = async (ctx, next) => {
        console.log(ctx.request.body)
        try {
            let patient = PatientModel(ctx.request.body);
            await patient.save();
            ctx.body = patient
        } catch (err) {
            ctx.status = err.status || 500;
            ctx.body = err.message;
        }


    };
    exports.addRDV = async (ctx, next) => {
        try {
    
            console.log(ctx.request.body.patient)
            console.log(ctx.request.body.rdv)
    
            let Patient = await PatientModel.update({ _id: ctx.request.body.patient }, { $push: { rdv: ctx.request.body.rdv } });
            ctx.body = Medecin;
    
        } catch (err) {
            ctx.status = err.status || 500;
            ctx.body = err.message;
        }
    
    };



