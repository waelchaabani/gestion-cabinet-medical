export default function routes(router){
    let RDVController=require('../controllers/RDVControllers');
        router.get('/RDV',RDVController.findRDV);
        router.get('/RDV/:id',RDVController.findRDVbyId);
        router.post('/RDV',RDVController.addRDV);
        router.delete('/RDV/:RDVId',RDVController.removeRDV);
        router.put('/RDV/:RDVId',RDVController.updateRDV);
        
    }