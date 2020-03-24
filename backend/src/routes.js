const express = require('express');

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);// LISTAGEM DE ONGS
routes.post('/ongs', OngController.create);// CADASTRO DE ONGS

routes.post('/incidents',IncidentController.create);// CADASTRO DE CASOS
routes.get('/incidents', IncidentController.index);//LISTAGEM DE CASOS
routes.delete('/incidents/:id', IncidentController.delete);//DELETAR CASO

routes.get('/profile', ProfileController.index);//LISTAGEM DE CASOS ESPECÍFICOS


module.exports = routes;