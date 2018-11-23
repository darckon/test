const express = require('express');
const router  = express.Router();

const user = require('../controllers/users.controllers');

router.post('/', user.createUser);
router.put('/', user.updateUser);
router.delete('/:id', user.deleteUser);
router.get('/:id', user.getUser);
router.get('/', user.getUsers);

module.exports = router;