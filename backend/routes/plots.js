const express = require('express');
const router = express.Router();
const pool = require('../config/database');
const { authenticateToken } = require('../middleware/auth');

// Get all plots
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM plots WHERE status = $1 ORDER BY created_at DESC', ['available']);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single plot
router.get('/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM plots WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Plot not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create plot (admin only)
router.post('/', authenticateToken, async (req, res) => {
  const { title, price, size, location, features, image_url, status } = req.body;
  
  try {
    const result = await pool.query(
      'INSERT INTO plots (title, price, size, location, features, image_url, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [title, price, size, location, features || [], image_url, status || 'available']
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update plot (admin only)
router.put('/:id', authenticateToken, async (req, res) => {
  const { title, price, size, location, features, image_url, status } = req.body;
  
  try {
    const result = await pool.query(
      'UPDATE plots SET title = $1, price = $2, size = $3, location = $4, features = $5, image_url = $6, status = $7, updated_at = CURRENT_TIMESTAMP WHERE id = $8 RETURNING *',
      [title, price, size, location, features || [], image_url, status, req.params.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Plot not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete plot (admin only)
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM plots WHERE id = $1 RETURNING *', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Plot not found' });
    }
    res.json({ message: 'Plot deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
