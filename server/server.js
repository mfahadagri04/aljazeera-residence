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
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 30000,  // 30-second timeout
      socketTimeoutMS: 45000,
      maxPoolSize: 5,
    });
    console.log('MongoDB connected!');
  } catch (err) {
    console.error('MongoDB connection failed:', err);
    process.exit(1); // Crash the app to force Render to restart
  }
};

// Handle connection events
mongoose.connection.on('connected', () => 
  console.log('Mongoose connected to DB'));

mongoose.connection.on('error', (err) => 
  console.error('Mongoose connection error:', err));

module.exports = connectDB;

// Add this to see detailed Mongoose logs
mongoose.set('debug', true);

// Testimonial Schema
const testimonialSchema = mongoose.model('Testimonial', {
  name: String,
  testimonial: String,
  rating: Number,
  date: { type: Date, default: Date.now }
});


const Testimonial = mongoose.model('Testimonial', testimonialSchema);

// API Routes
app.post('/api/testimonials', async (req, res) => {
  try {
    delete req.body._id; // Critical: Prevent client-side _id injection
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