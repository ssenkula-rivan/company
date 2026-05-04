// Vercel Serverless Function for Health Check
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  return res.status(200).json({ 
    status: 'Backend is running',
    timestamp: new Date().toISOString(),
    environment: 'Vercel Serverless'
  });
};
