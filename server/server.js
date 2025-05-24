const mongoose = require('mongoose');
require('dotenv').config();

// Connect to Atlas
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas!'))
  .catch(err => console.error('Connection failed:', err));

  