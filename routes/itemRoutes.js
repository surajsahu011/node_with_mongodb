const express = require('express');
const router = express.Router();
const controller = require('../controllers/itemController');

router.get('/', controller.listItems);
router.get('/add', controller.showAddForm);
router.post('/add', controller.createItem);
router.get('/edit/:id', controller.showEditForm);
router.post('/edit/:id', controller.updateItem);
router.post('/delete/:id', controller.deleteItem);

module.exports = router;
