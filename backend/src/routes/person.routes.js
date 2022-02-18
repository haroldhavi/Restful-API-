const router = require('express-promise-router')();
const personController = require('../controllers/person.controller');

// ==> Definindo as rotas do CRUD - 'person':

// ==> Rota responsável por criar um novo 'person': (POST): localhost:3000/api/person
router.post('/person', personController.createPerson);
router.get('/person', personController.getAllPerson);
router.get('/person/:id', personController.getPerson);
router.get('/person/name/:name', personController.getPersonName);

module.exports = router;