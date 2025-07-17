const path = require('path');
const fs = require('fs');

const rootPath = path.join(__dirname, '../src/fields');

const entry = {};

try {
  const folders = fs.readdirSync(rootPath);
  folders.forEach(folder => {
    const folderStat = fs.statSync(path.join(rootPath, folder));
    if (folderStat.isDirectory()) {
      entry[folder] = path.join(rootPath, `/${folder}/index.js`);
    }
  });
} catch (e) {
  console.error(e);
}

module.exports = entry;
