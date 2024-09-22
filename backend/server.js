const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

const profilesFilePath = path.join(__dirname, 'public', 'profile.json');

// GET profiles
app.get('/profile', (req, res) => {
  fs.readFile(profilesFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading file' });
    }
    try {
      const profiles = JSON.parse(data);
      res.json(profiles);
    } catch (e) {
      res.status(500).json({ message: 'Error parsing JSON' });
    }
  });
});

// POST enroll
app.post('/enroll', (req, res) => {
  const newProfile = req.body;
  fs.readFile(profilesFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading file' });
    }
    try {
      const profiles = JSON.parse(data);
      profiles.push(newProfile);
      fs.writeFile(profilesFilePath, JSON.stringify(profiles), (err) => {
        if (err) {
          return res.status(500).json({ message: 'Error writing file' });
        }
        res.status(201).json(newProfile);
      });
    } catch (e) {
      res.status(500).json({ message: 'Error parsing JSON' });
    }
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));
