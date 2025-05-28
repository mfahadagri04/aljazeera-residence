const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());

// Testimonial Schema
const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  testimonial: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  date: { type: Date, default: Date.now }
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

// Enhanced MongoDB Connection
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    mongoose.set('debug', true);
    
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      retryWrites: true,
      w: 'majority'
    });
    
    console.log('MongoDB connected successfully!');
    
    // Start server only after DB connection
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
    
  } catch (err) {
    console.error('MongoDB connection failed:', err);
    process.exit(1);
  }
};

// Connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// API Routes with better error handling
app.post('/api/testimonials', async (req, res) => {
  try {
    if (!req.body.name || !req.body.testimonial || !req.body.rating) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    
    const newTestimonial = new Testimonial({
      name: req.body.name,
      testimonial: req.body.testimonial,
      rating: req.body.rating,
      // date will be automatically added
    });
    
    await newTestimonial.save({ timeout: 15000 }); // 15s timeout for the operation
    res.status(201).json(newTestimonial);
    
  } catch (err) {
    console.error('Error creating testimonial:', err);
    res.status(500).json({ 
      message: err.message.includes('buffering timed out') 
        ? 'Database operation timed out' 
        : 'Server error' 
    });
  }
});

app.get('/api/testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ date: -1 }).maxTimeMS(10000);
    res.json(testimonials);
  } catch (err) {
    console.error('Error fetching testimonials:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Initialize the connection
connectDB();