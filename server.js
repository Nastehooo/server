// server.js

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8000;

// Allow requests from React frontend (localhost:3000)
app.use(cors());

// Serve Scatter Plot Data
app.get('/api/scatter-data', (req, res) => {
  const filePath = path.join(__dirname, 'scatter_plot.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('❌ Error reading scatter data:', err.message);
      return res.status(500).json({ error: 'Failed to read scatter data' });
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseErr) {
      console.error('❌ Error parsing scatter JSON:', parseErr.message);
      res.status(500).json({ error: 'Invalid scatter data format' });
    }
  });
});

// Serve Bar Chart Data
app.get('/api/bar-chart-data', (req, res) => {
  const filePath = path.join(__dirname, 'bar_chart.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('❌ Error reading bar chart data:', err.message);
      return res.status(500).json({ error: 'Failed to read bar chart data' });
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseErr) {
      console.error('❌ Error parsing bar chart JSON:', parseErr.message);
      res.status(500).json({ error: 'Invalid bar chart data format' });
    }
  });
});


// Serve the raw map chart data
app.get('/api/map-chart-data', (req, res) => {
  const filePath = path.join(__dirname, 'map-chart.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('❌ Error reading map chart data:', err.message);
      return res.status(500).json({ error: 'Failed to read map chart data' });
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseErr) {
      console.error('❌ Error parsing map chart JSON:', parseErr.message);
      res.status(500).json({ error: 'Invalid map chart data format' });
    }
  });
});

// Serve the GeoJSON data
app.get('/api/geo', (req, res) => {
  const filePath = path.join(__dirname, 'englandregions.geojson');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('❌ Error reading GeoJSON:', err.message);
      return res.status(500).json({ error: 'Failed to read GeoJSON file' });
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseErr) {
      console.error('❌ Error parsing GeoJSON:', parseErr.message);
      res.status(500).json({ error: 'Invalid GeoJSON format' });
    }
  });
})


// Serve the raw map chart data
app.get('/api/animation', (req, res) => {
  const filePath = path.join(__dirname, 'gapminder_chart.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('❌ Error reading gapminder chart data:', err.message);
      return res.status(500).json({ error: 'Failed to read gapminder chart data' });
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseErr) {
      console.error('❌ Error parsing gapminder chart JSON:', parseErr.message);
      res.status(500).json({ error: 'Invalid gapminder chart data format' });
    }
  });
});




// Root Endpoint
app.get('/', (req, res) => {
  res.send('✅ Backend API is running.');
});

// Start server (should be last!)
app.listen(PORT, () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});

