// Vercel Serverless Function for Properties
const properties = require('../backend/routes/properties');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Forward to Express route handler
    return properties(req, res);
  } catch (error) {
    console.error('Properties API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
