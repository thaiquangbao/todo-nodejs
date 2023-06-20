const express = require('express')
const useRouter = express.Router();
const siteController = require('../app/controllers/SiteController')
useRouter.post('/delete',siteController.delete);
useRouter.post('/update',siteController.update)
useRouter.post('/insert',siteController.insert);
useRouter.get('/api',siteController.show);
useRouter.get('/',siteController.tasks) ;

module.exports = useRouter;