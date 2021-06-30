export default function routes(router){
    let OrdonnancementController=require('../controllers/OrdonnancementControllers');
        router.get('/Ordonnancement',OrdonnancementController.findOrdonnancement);
        router.get('/Ordonnancement/:id',OrdonnancementController.findOrdonnancementbyId);

        router.post('/Ordonnancement',OrdonnancementController.addOrdonnancement);
        router.delete('/Ordonnancement/:OrdonnancementId',OrdonnancementController.removeOrdonnancement);
        router.put('/Ordonnancement/:OrdonnancementId',OrdonnancementController.updateOrdonnancement);
    }