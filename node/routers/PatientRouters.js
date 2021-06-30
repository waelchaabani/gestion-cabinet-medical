



const koaBody = require('koa-body')({ multipart: true, uploadDir: '.' })

export default function routes(router) {
    let PatientController = require('../controllers/PatientControllers');
    let MedecinController = require('../controllers/MedecinControllers');
   router.get('/Patient/getImage', PatientController.findimage);
    router.get('/Patient', PatientController.findPatient);
    router.get('/Patient/:id', PatientController.findPatientbyId);
    router.post('/Patient', koaBody, PatientController.addPatient);
    router.delete('/Patient/:PatientId', PatientController.removePatient);
    router.put('/Patient/:PatientId', PatientController.updatePatient);
    router.post('/Patient/loginp', PatientController.loginp);
    router.post('/Patient/registerp', PatientController.registerp);
    router.get('/Patient/:id', MedecinController.findMedecinbyId);
    router.post('/Patient/addRDV', PatientController.addRDV);


}