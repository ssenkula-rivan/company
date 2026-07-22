// Vercel Serverless Function for Testimonials
// Temporary storage (in production, use a database)
let testimonials = [];

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'POST') {
      const { name, text, rating } = req.body;
      
      // Validate input
      if (!name || !text || !rating) {
        return res.status(400).json({ error: 'Name, text, and rating are required' });
      }

      // Create testimonial object
      const testimonial = {
        id: Date.now(),
        name,
        text,
        rating: parseInt(rating),
        created_at: new Date().toISOString(),
        approved: false // Pending approval
      };

      // Store testimonial
      testimonials.push(testimonial);

      // Log to console (you can check Vercel logs)
      console.log('New testimonial submitted:', testimonial);

      return res.status(201).json({ 
        success: true,
        message: 'Thank you! Your review has been submitted and is pending approval.',
        id: testimonial.id 
      });
    }

    if (req.method === 'GET') {
      // Return approved testimonials
      const approved = testimonials.filter(t => t.approved);
      return res.status(200).json(approved);
    }

    return res.status(405).json({ error: 'Method not allowed' });

  } catch (error) {
    console.error('Testimonials API Error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
};
