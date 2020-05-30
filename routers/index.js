const router = require('express').Router();
const Controller = require('../controllers/controller.js');
const { authenticateUser } = require('../middlewares/authentication.js');
const { authorizeUser } = require('../middlewares/authorization.js');

router.post('/login', Controller.login);
router.use(authenticateUser);
router.get('/countries', Controller.getCountries);
router.get('/reports', Controller.showAllReports);
router.post('/reports', Controller.addReport);
router.delete('/reports/:id', authorizeUser, Controller.deleteReport);

module.exports = router;
