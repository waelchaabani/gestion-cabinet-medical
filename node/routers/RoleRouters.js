export default function routes(router){
    let RoleController=require('../controllers/RoleControllers');
        router.get('/Role',RoleController.findRole);
        router.post('/Role',RoleController.addRole);
    
    }