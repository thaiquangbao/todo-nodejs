const express = require('express')
const useRouter = express.Router();
const userController = require('../app/controllers/UserController');
useRouter.post('/delete',userController.delete);
useRouter.post('/update',userController.update)
useRouter.post('/insert',userController.insert);
useRouter.get('/account',userController.index)
useRouter.get('/',userController.show)
module.exports = useRouter

