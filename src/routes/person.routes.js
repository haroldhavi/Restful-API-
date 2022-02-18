const router = require('express-promise-router')();
const personController = require('../controllers/person.controller');

// ==> desfinir las rutas de CRUD - 'person':


router.post('/person', personController.createPerson);
router.get('/person', personController.getAllPerson);
router.get('/person/:id', personController.getPerson);
router.get('/person/name/:name', personController.getPersonName);

module.exports = router;