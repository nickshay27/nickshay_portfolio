const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2');

const chatRoute = require('./routes/chatRoute');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', chatRoute);

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('DB Connection Error:', err);
  } else {
    console.log('Connected to MySQL DB');
  }
});

// Sample route
app.get('/', (req, res) => {
  res.send('Nickshay Portfolio Backend is running!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
