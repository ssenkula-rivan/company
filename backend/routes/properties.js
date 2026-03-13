const express = require('express');
const router = express.Router();
const pool = require('../config/database');
const { authenticateToken } = require('../middleware/auth');

// Get all properties
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM properties WHERE status = $1 ORDER BY created_at DESC', ['available']);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single property
router.get('/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM properties WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create property (admin only)
router.post('/', authenticateToken, async (req, res) => {
  const { title, price, location, type, description, image_url, features, status } = req.body;
  
  try {
    const result = await pool.query(
      'INSERT INTO properties (title, price, location, type, description, image_url, features, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [title, price, location, type, description, image_url, features || [], status || 'available']
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update property (admin only)
router.put('/:id', authenticateToken, async (req, res) => {
  const { title, price, location, type, description, image_url, features, status } = req.body;
  
  try {
    const result = await pool.query(
      'UPDATE properties SET title = $1, price = $2, location = $3, type = $4, description = $5, image_url = $6, features = $7, status = $8, updated_at = CURRENT_TIMESTAMP WHERE id = $9 RETURNING *',
      [title, price, location, type, description, image_url, features || [], status, req.params.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete property (admin only)
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM properties WHERE id = $1 RETURNING *', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.json({ message: 'Property deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
