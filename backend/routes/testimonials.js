const express = require('express');
const router = express.Router();
const pool = require('../config/database');
const { authenticateToken } = require('../middleware/auth');

// Get all approved testimonials
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM testimonials WHERE approved = true ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create testimonial (public)
router.post('/', async (req, res) => {
  const { name, role, text, rating, photo_url } = req.body;
  
  try {
    const result = await pool.query(
      'INSERT INTO testimonials (name, role, text, rating, photo_url, approved) VALUES ($1, $2, $3, $4, $5, false) RETURNING *',
      [name, role, text, rating || 5, photo_url]
    );
    res.status(201).json({ message: 'Testimonial submitted for approval', id: result.rows[0].id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Approve testimonial (admin only)
router.put('/:id/approve', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query(
      'UPDATE testimonials SET approved = true, updated_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *',
      [req.params.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete testimonial (admin only)
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM testimonials WHERE id = $1 RETURNING *', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    res.json({ message: 'Testimonial deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
