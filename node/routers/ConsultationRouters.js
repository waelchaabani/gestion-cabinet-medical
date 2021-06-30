export default function routes(router){
    let ConsultationController=require('../controllers/ConsultationControllers');
    router.get('/Consultation',ConsultationController.findConsultation);
    router.post('/Consultation',ConsultationController.addConsultation);
    router.delete('/Consultation:ConsultationId',ConsultationController.removeConsultation);
    router.put('/Consultation/:ConsultationId',ConsultationController.updateConsultation);

}
    