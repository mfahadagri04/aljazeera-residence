const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize Express
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas!'))
  .catch(err => console.error('Connection failed:', err));

// Testimonial Schema
const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  testimonial: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
}, { timestamps: true });


const Testimonial = mongoose.model('Testimonial', testimonialSchema);

// API Routes
app.post('/api/testimonials', async (req, res) => {
  try {
    const newTestimonial = new Testimonial(req.body);
    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


app.get('/api/testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('API is running...');
});


// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});