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

///update category
router.put('/category/update/:id', async (req, res) => {
  try {
    const updatedPost = await Posts.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } 
    );

    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    return res.status(200).json({
      success: "Updated successfully",
      data: updatedPost
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

//delete category
router.delete('/category/delete/:id', async (req, res) => {
  try {
    const deletedPost = await Posts.findByIdAndDelete(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    return res.status(200).json({
      success: "Deleted successfully",
      data: deletedPost
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});


module.exports = router;
