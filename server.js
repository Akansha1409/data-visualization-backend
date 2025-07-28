const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// ✅ Add this route to fix "Cannot GET /"
app.get('/', (req, res) => {
  res.send('✅ Backend is running');
});

app.use('/api', dataRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
