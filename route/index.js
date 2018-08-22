const express = require('express');

module.exports = () => {
    const router = express.Router();
    
	router.get('/', function(req, res, next) {
		res.send('Halo');
    });
    
	return router;
};