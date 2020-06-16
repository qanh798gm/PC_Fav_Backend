const express = require('express');
const Category = require('../models/category');
const router = new express.Router();

const categoryService = require('../services/category.service');

router.get('/categories', async (req, res) => {
  console.log('Get categories:');

  try {
    const categories = await Category.find({})

    console.log(categories);

    res.send(categoryService.getSuccess(categories))
  } catch (e) {
    console.log(e);
    res.send(categoryService.getFail(e))
  }
})

router.post('/categories', async (req, res) => {
  const category = new Category(req.body)
  console.log('Create category:');

  try {
    await category.save()

    console.log(req.body);

    res.send(categoryService.createSuccess(req.body.name))
  } catch (e) {
    console.log(e);
    res.send(categoryService.createFail(e))
  }
})

router.put('/categories/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id)
  } catch (e) {

  }
})

module.exports = router
