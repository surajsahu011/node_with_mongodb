require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// DB Connection
connectDB();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/items', itemRoutes);

// Root Route
app.get('/', (req, res) => {
  res.redirect('/items');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
