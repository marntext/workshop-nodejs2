const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');

router.post('/addCategory', CategoryController.addController);

router.get('/getCategory/:id', CategoryController.getCategory);

router.get('/updateCategory/', CategoryController.updateCategory);

router.get('/deleteCategory/', CategoryController.deleteCategory);

router.get('/', CategoryController.getCategories);