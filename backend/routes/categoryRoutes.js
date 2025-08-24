const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController.js');

router.get('/categories', categoryController.getAllCategories);
router.get('/categories/:id', categoryController.getCategoryById);
router.post('/categories', categoryController.createCategory);
router.put('/categories/:id', categoryController.updateCategory);
router.get('/categories/:id/games', categoryController.getCategoryById);
router.get('/categories/games', categoryController.getAllCategories);
router.delete('/categories/:id', categoryController.deleteCategory);

module.exports = router;
