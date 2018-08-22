const express = require('express');
const userController = require('../controller/userController');

module.exports = () => {
    const router = express.Router();

    router.post('/register', userController.createUser);

    return router;
}
