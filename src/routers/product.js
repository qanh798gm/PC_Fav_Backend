const express = require('express')
const Product = require('../models/product')
const router = new express.Router()

router.post('/products', async (req, res) => {
  const product = new Task({
    ...req.body,
    owner: req.user._id
  })

  try {
    await task.save()
    res.status(201).send(task)
  } catch (e) {
    res.status(400).send(e)
  }
})
