/*const express=require("express");
var app=express();*/
import koa from 'koa';
import Router from 'koa-router';
import respond from 'koa-respond';
import mongoose from 'mongoose';
import cors from 'koajs-cors';
import bodyParser from 'koa-bodyparser';
import routesUser from './routers/UserRouters';
import routesRDV from './routers/RDVRouters';
import routesPatient from './routers/PatientRouters';
import routesOrdonnacement from './routers/OrdonnancementRouters';
import routesCertificat from './routers/CertificatRouters';
import routesConsultation from './routers/ConsultationRouters';
import routesAssurance from './routers/AssuranceRouters';
import routesMedecin from './routers/MedecinRouters';
import routesPayment from './routers/PaymentRouters';
import routes from './routers/UserRouters';
import routesRole from './routers/RoleRouters';
import multer from 'multer'
import mime from 'mime-types'
import fs from 'fs'
import { createReadStream } from 'fs';
import { addMedecin } from './controllers/MedecinControllers';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
      },
    filename: function (req, file, callback) {
        //..
    }
});
var upload = multer({ storage: storage }).array('userphoto', 2);
import serve from 'koa-static-folder';


const logger = require('morgan');
const app = new koa();
const router = Router();
mongoose.connect('mongodb://localhost/nodejs');
app.use(bodyParser());
app.use(cors());
app.use(respond());
routesUser(router);
routesRDV(router);
routesPatient(router);
routesOrdonnacement(router);
routesCertificat(router);
routesConsultation(router);
routesAssurance(router);
routesMedecin(router);
routesPayment(router);
routesRole(router);
const koaBody = require('koa-body')({multipart: true, uploadDir: '.'})
router.post('/register', koaBody, async (ctx,next)=> {
    try {
        const {path, name, type} = ctx.request.files.avatar
        const fileExtension = mime.extension(type)
        console.log(`path: ${path}`)
        console.log(`type: ${type}`)
        console.log(`fileExtension: ${fileExtension}`)
        await fs.copyFileSync(path, `uploads/${name}`)
        
        ctx.body = {
            success: false,
            message: 'This is not image file',
            photo: name
          }
    } catch(err) {
        console.log(`error ${err.message}`)
        ctx.body = {
            success: false,
            message: err.message,
            photo: ""
          }
    }
})
router.post('/uploads', function (req, res, next) {
    upload(req, res, function (err) {
        console.log(req.files);
        req.files.forEacg(item => {


        })
        if (err) {
            return res.end("error uploading file.");
        }
        res.json({ msg: "File is uploaded" });

    })
})
router.get('/getImage/:image', async (ctx,next) => {
    
     console.log("dd :",__dirname + "/uploads/" + ctx.params.image)
   // serve(__dirname + "/uploads/" + ctx.params.image);
   ctx.body = fs.createReadStream(__dirname + "/uploads/" + ctx.params.image);

})



app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, function () {
    console.log("run server with 3000")
});

//taskkill /f /im node.exe
