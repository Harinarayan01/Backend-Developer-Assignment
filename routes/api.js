const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const authMiddleware = require('../middleware/authMiddleware');

// Public routes
router.post('/register', apiController.register);
router.post('/login', apiController.login);

// Protected routes
router.use(authMiddleware.verifyToken);
router.post('/submit-paragraph', apiController.submitParagraph);
router.get('/search/:word', apiController.searchParagraphs);

module.exports = router;
