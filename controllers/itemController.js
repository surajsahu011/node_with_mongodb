const Item = require('../models/Item');

// Show all items
exports.listItems = async (req, res) => {
  const items = await Item.find().sort({ createdAt: -1 });
  res.render('items/list', { items });
};

// Show form to create item
exports.showAddForm = (req, res) => {
  res.render('items/add');
};

// Create item
exports.createItem = async (req, res) => {
  const { name, description } = req.body;
  await Item.create({ name, description });
  res.redirect('/items');
};

// Show form to edit item
exports.showEditForm = async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.render('items/edit', { item });
};

// Update item
exports.updateItem = async (req, res) => {
  await Item.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/items');
};

// Delete item
exports.deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.redirect('/items');
};
