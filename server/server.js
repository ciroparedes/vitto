require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const CLIENT_BUILD = process.env.CLIENT_BUILD || 'client/dist';

app.use(cors());

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

// Serve static files from the client build directory
app.use(express.static(path.join(__dirname, '..', CLIENT_BUILD)));

// Fallback to index.html for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', CLIENT_BUILD, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`Serving client build from: ${CLIENT_BUILD}`);
});