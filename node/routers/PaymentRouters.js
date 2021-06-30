export default function routes(router){
    let PaymentController=require('../controllers/PaymentControllers');
        router.get('/Payment',PaymentController.findPayment);
        router.get('/Payment/:id',PaymentController.findPaymentbyId);
        router.post('/Payment',PaymentController.addPayment);
        router.delete('/Payment/:PaymentId',PaymentController.removePayment);
        router.put('/Payment/:PaymentId',PaymentController.updatePayment);
        
    }