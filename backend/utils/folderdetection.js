const path = require('path');
const fs = require('fs');

const getSteamFolder = () => {
  const steamPaths = [
    'C:\\Program Files (x86)\\Steam',
    'C:\\Program Files\\Steam',
    'D:\\Steam',
    'E:\\Steam'
  ];

  for (const steamPath of steamPaths) {
    if (fs.existsSync(steamPath)) {
      return steamPath;
    }
  }

  return null;
};

const getInstalledGames = (steamFolder) => {
  if (!steamFolder) {
    return [];
  }

  const steamAppsPath = path.join(steamFolder, 'steamapps', 'common');
  if (!fs.existsSync(steamAppsPath)) {
    return [];
  }

  return fs.readdirSync(steamAppsPath).filter(gameFolder => {
    return fs.statSync(path.join(steamAppsPath, gameFolder)).isDirectory();
  });
};

module.exports = {
  getSteamFolder,
  getInstalledGames
};
