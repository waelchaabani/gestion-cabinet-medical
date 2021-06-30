export default function routes(router){
    let UserController=require('../controllers/UserControllers');
    router.get('/users',UserController.findAllUser);
    router.get('/User/:id',UserController.findUserbyId);

    router.post('/users',UserController.addAllUser);
    router.delete('/users/:userId',UserController.removeUsers);
    router.put('/users/:userId',UserController.updateUsers);
    router.post('/users/login',UserController.login);
    router.post('/users/register',UserController.register);

}