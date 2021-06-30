
const koaBody = require('koa-body')({ multipart: true, uploadDir: '.' })
export default function routes(router) {
    let MedecinController = require('../controllers/MedecinControllers');
    router.get('/Medecin', MedecinController.findMedecin);
    router.get('/Medecin/:id', MedecinController.findMedecinbyId);
    router.post('/Medecin',koaBody, MedecinController.registerm);
    router.delete('/Medecin/:MedecinId', MedecinController.removeMedecin);
    router.put('/Medecin/:MedecinId', MedecinController.updateMedecin);
    router.post('/Medecin/addp', MedecinController.addPatient);
    router.post('/Medecin/loginm', MedecinController.loginm);
    router.post('/Medecin/registerm', MedecinController.registerm);
    router.post('/Medecin/addRDV', MedecinController.addRDV);
    router.post('/Medecin/addPayment', MedecinController.addPayment);
    router.get('/Medecin/getImage', MedecinController.findimage);
}