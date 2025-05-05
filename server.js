const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000; // Allow dynamic port for hosting services

// Middleware
app.use(cors());
app.use(express.json()); // Allows parsing JSON requests

// Serve Scatter Plot Data
app.get('/api/scatter-data', (req, res) => {
  const filePath = path.join(__dirname, 'scatter_plot.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('❌ Error reading scatter data:', err.message);
      return res.status(500).json({ error: 'Failed to read scatter data' });
    }
    try {
      res.json(JSON.parse(data));
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
      res.json(JSON.parse(data));
    } catch (parseErr) {
      console.error('❌ Error parsing bar chart JSON:', parseErr.message);
      res.status(500).json({ error: 'Invalid bar chart data format' });
    }
  });
});

// Serve Map Chart Data
app.get('/api/map-chart-data', (req, res) => {
  const filePath = path.join(__dirname, 'map-chart.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('❌ Error reading map chart data:', err.message);
      return res.status(500).json({ error: 'Failed to read map chart data' });
    }
    try {
      res.json(JSON.parse(data));
    } catch (parseErr) {
      console.error('❌ Error parsing map chart JSON:', parseErr.message);
      res.status(500).json({ error: 'Invalid map chart data format' });
    }
  });
});

// Serve GeoJSON Data
app.get('/api/geo', (req, res) => {
  const filePath = path.join(__dirname, 'englandregions.geojson');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('❌ Error reading GeoJSON:', err.message);
      return res.status(500).json({ error: 'Failed to read GeoJSON file' });
    }
    try {
      res.json(JSON.parse(data));
    } catch (parseErr) {
      console.error('❌ Error parsing GeoJSON:', parseErr.message);
      res.status(500).json({ error: 'Invalid GeoJSON format' });
    }
  });
});

// Serve Animated Chart Data
app.get('/api/animation', (req, res) => {
  const filePath = path.join(__dirname, 'gapminder_chart.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('❌ Error reading gapminder chart data:', err.message);
      return res.status(500).json({ error: 'Failed to read gapminder chart data' });
    }
    try {
      res.json(JSON.parse(data));
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

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});

