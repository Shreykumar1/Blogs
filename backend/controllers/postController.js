const db = require("../database");
const ShortUniqueId = require('short-unique-id');

// Get all blog posts
const getAllPosts = async (req, res) => {
  try {
    const query = "SELECT * FROM posts";

    db.all(query, [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ posts: rows });
      }
    });

  } catch (error) {
    console.log(error);
    res.status(404).send({ error: error });
  }
};

// create blog post
const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    // Validate that title and content are provided
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    const uid = new ShortUniqueId({ length: 5});
    const id = uid.rnd();

    const query = "INSERT INTO posts (id ,title, content) VALUES (? ,?, ?)"; // Query to create post
    db.run(query, [id, title, content], function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).json({ id, title, content });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({ error: error });
  }
};

//  Get single blog post
const getSinglePost = async (req, res) => {
  const postId = req.params.id;
  const query = "SELECT * FROM posts WHERE id = ?"; // Query to get single post
  try {
    db.get(query, [postId], (err, row) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
      // If the post doesn't exist
      if (!row) {
        return res.status(404).json({ error: "Post not found" });
      }
        res.json(row);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({ error: error });
  }
};

const deletePost = async (req, res) => {
  const postId = req.params.id;
  const deleteQuery = "DELETE FROM posts WHERE id = ?";
  const checkQuery = "SELECT * FROM posts WHERE id = ?"; // Query to check if post exists

  try {
    // Check if the post exists
    db.get(checkQuery, [postId], (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      // If the post doesn't exist
      if (!row) {
        return res.status(404).json({ error: "Post not found" });
      }

      // If the post exists, delete it
      db.run(deleteQuery, [postId], (err) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }

        res.json({ message: "Post deleted" });
      });
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;

  // SQL queries
  const updateQuery = "UPDATE posts SET title = ?, content = ? WHERE id = ?";
  const checkQuery = "SELECT * FROM posts WHERE id = ?"; // Query to check if post exists

  // Validate that title and content are provided
  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  try {
    // Check if the post exists
    db.get(checkQuery, [postId], (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      // If the post doesn't exist
      if (!row) {
        return res.status(404).json({ error: "Post not found" });
      }

      // If the post exists, update it
      db.run(updateQuery, [title, content, postId], (err) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }

        res.json({ message: "Post updated successfully" });
      });
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  deletePost,
  updatePost,
};
