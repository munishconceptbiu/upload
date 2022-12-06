

const Router = require('express').Router;
const router = Router();

const authorize = require('_middleware/authorize')
const userController = require('./users.controller')
// routes
router.post('/authenticate', userController.authenticateSchema, userController.authenticate);
router.post('/adduser', userController.addUser);
router.post('/clientlist',  userController.getClientList);
router.put('/updateuser/:user_id',  userController.updateUser);

router.get('/getusers', authorize(),  userController.getUserList);
router.get('/getuser/:user_id',  userController.getSingleUser);
router.delete('/deleteuser/:user_id',  userController.deleteUser);

module.exports = router;