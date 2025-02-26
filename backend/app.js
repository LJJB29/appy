const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const express = require('express');
const { getSteamFolder, getInstalledGames } = require('./utils/folderDetection');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.get('/detect-steam-folder', (req, res) => {
  const steamFolder = getSteamFolder();
  if (steamFolder) {
    res.json({ steamFolder });
  } else {
    res.status(404).json({ error: 'Steam folder not found' });
  }
});

app.get('/installed-games', (req, res) => {
  const steamFolder = getSteamFolder();
  const games = getInstalledGames(steamFolder);
  res.json({ games });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
