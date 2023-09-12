const fs = require('fs');
const os = require('os');
const path = require('path');

function getJsonXFolder() {
  // Get the user's home directory
  const userHomeDir = os.homedir();

  // Determine the desktop directory based on the operating system
  let desktopDir;
  switch (os.platform()) {
    case 'win32':
      // On Windows, the desktop directory is typically 'Desktop' under the user's profile folder
      desktopDir = path.join(userHomeDir, 'Desktop');
      break;
    case 'darwin':
      // On macOS, the desktop directory is typically 'Desktop' under the user's profile folder
      desktopDir = path.join(userHomeDir, 'Desktop');
      break;
    case 'linux':
      // On Linux, the desktop directory can vary, so we'll use 'Desktop' as a common option
      desktopDir = path.join(userHomeDir, 'Desktop');
      break;
    default:
      throw new Error('Unsupported operating system');
  }

  // Ensure the desktop directory exists, and create it if necessary
  if (!fs.existsSync(desktopDir)) {
    fs.mkdirSync(desktopDir);
  }

  const jsonXdir = `${desktopDir}/jsonX`;

  try {
    // Create JsonX Folder if it does not exists
    if (!fs.existsSync(jsonXdir)) {
      fs.mkdirSync(jsonXdir);
      console.log(`JSON.X has created the folder ${jsonXdir}`);
      console.log(`Please put your json files in here
    `);
    } else {
      const read = fs.readdirSync(jsonXdir);

      if (read.includes('results')) {
        read.splice(read.indexOf('results'), 1);
      }

      if (read.length) {
        console.log(`JSON.X has found the following files:`);
        console.log(`${read}\n`);
      } else {
        console.log(`No files found on jsonX folder\n`);
      }
    }
  } catch (error) {
    console.log(`Error trying to create jsonX folder on Desktop`);
    console.log(`Please check that you have read/write permissions`);
  }

  return jsonXdir;
}

function saveFile(folder, filename, data) {
  const resultsFolder = `${folder}/results`;
  // Ensure the desktop directory exists, and create it if necessary
  if (!fs.existsSync(folder)) {
    console.log(
      'JSON.X folder does not exist, please create a "jsonX" folder on Desktop or run jsonX again'
    );
  }

  if (!fs.existsSync(resultsFolder)) {
    fs.mkdirSync(resultsFolder);
  }

  // Construct the full file path
  const filePath = path.join(resultsFolder, filename);

  // Write the file to the desktop
  fs.writeFileSync(filePath, data);
}

module.exports = { getJsonXFolder, saveFile };
