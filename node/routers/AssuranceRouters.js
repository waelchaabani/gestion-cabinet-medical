export default function routes(router){
    let AssuranceController=require('../controllers/AssuranceControllers');
        router.get('/Assurance',AssuranceController.findAssurance);
        router.post('/Assurance',AssuranceController.addAssurance);
        router.delete('/Assurance/:AssuranceId',AssuranceController.removeAssurance);
        router.put('/Assurance/:AssuranceId',AssuranceController.updateAssurance);
    }