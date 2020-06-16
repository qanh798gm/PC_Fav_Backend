const express = require('express');
const Category = require('../models/category');
const router = new express.Router();

const categoryService = require('../services/category.service');

// Get category list
router.get('/categories', async (req, res) => {
  console.log('Get categories:');

  try {
    const categories = await Category.find({});

    console.log(categories);

    res.send(categoryService.getListSuccess(categories));
  } catch (e) {
    console.log(e);
    res.send(categoryService.notFound());
  }
});

// Get one category
router.get('/categories/:id', async (req, res) => {
  console.log('Get one category:');

  try {
    const category = await Category.findById(req.params.id);

    console.log(category);

    res.send(categoryService.getOneSuccess(category));
  } catch (e) {
    console.log(e);
    res.send(categoryService.notFound());
  }
});

// Create new category
router.post('/categories', async (req, res) => {
  const category = new Category(req.body);
  console.log('Create category:');

  try {
    await category.save();

    console.log(req.body);

    res.send(categoryService.createSuccess(req.body.name));
  } catch (e) {
    console.log(e);
    res.send(categoryService.createFail(e));
  }
});

// Update category
router.patch('/categories/:id', async (req, res) => {
  console.log('Update category:');

  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'description'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    res.send(categoryService.updateFail());
  }

  try {
    const category = await Category.findById(req.params.id);

    console.log(category);

    updates.forEach((update) => (category[update] = req.body[update]));
    category.save();
    res.send(categoryService.updateSuccess(category));
  } catch (e) {
    console.log(e);
    res.send(categoryService.updateFail());
  }
});

// Delete category
router.delete('/categories/:id', async (req, res) => {
  console.log('Delete category:');

  try {
    const category = await Category.findByIdAndDelete(req.params.id);

    console.log(category);
    if (!category) {
      res.send(categoryService.deleteFail());
    }
    res.send(categoryService.deleteSuccess(category));
  } catch (e) {
    console.log(e);
    res.send(categoryService.deleteFail());
  }
});

module.exports = router;
