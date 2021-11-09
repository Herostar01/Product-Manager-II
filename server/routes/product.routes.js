const PersonController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson);
    app.get('/api/people', PersonController.getAllPeople);
    app.get('/api/people/:id', PersonController.getPerson);
}

