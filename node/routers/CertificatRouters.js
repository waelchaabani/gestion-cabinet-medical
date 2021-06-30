export default function routes(router){
    let CertificatController=require('../controllers/CertificatControllers');
        router.get('/Certificat',CertificatController.findCertificat);
        router.post('/Certificat',CertificatController.addCertificat);
        router.delete('/Certificat/:CertificatId',CertificatController.removeCertificat);
        router.put('/Certificat/:CertificatId',CertificatController.updateCertificat);
    }