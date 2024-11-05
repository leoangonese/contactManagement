const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact');
const authenticateToken = require('../middlewares/core');

// will need add a authentication
router.get('/', /*authenticateToken,*/ contactController.getContacts);
router.post('/', /*authenticateToken,*/ contactController.createContact);
router.put('/:id', /*authenticateToken,*/ contactController.updateContact);
router.delete('/:id', /*authenticateToken,*/ contactController.deleteContact);

module.exports = router;
