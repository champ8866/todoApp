var express = require('express')

var router = express.Router()

var UserController = require('../../controllers/users.controller');

// routes
router.post('/authenticate', UserController.authenticate);
router.post('/register', UserController.register);
router.get('/', UserController.getAll);
router.get('/current', UserController.getCurrent);
router.get('/:id', UserController.getById);
router.put('/:id', UserController.update);
router.delete('/:id', UserController._delete);

module.exports = router;