const express = require('express');
const Posts = require('../models/category');
const category = require('../models/category');

const router = express.Router();

// save category
router.post('/category/save', (req, res) => {
  let newPost = new Posts(req.body);

  newPost.save()
    .then(savedPost => {
      return res.status(200).json({
        success: "Post saved successfully",
        data: savedPost  
      });
    })
    .catch(err => {
      return res.status(400).json({
        error: err
      });
    });
});

// get category
router.get('/categories', async (req, res) => {
  try {
      const posts = await Posts.find().exec();
      return res.status(200).json({
          success: true,
          existingPosts: posts  
      });
  } catch (err) {
      return res.status(400).json({
          error: err
      });
  }
});


module.exports = router;
