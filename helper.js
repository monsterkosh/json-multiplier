function showHelp() {
  console.log(`
    The first time you run "jsonX" on your terminal it will create a "jsonX" folder on your desktop. Please put your .json files inside this folder and run "jsonX" a second time to check if the files have been read.
  
    To run JSON Multiplier you will need to type "jsonX --run" with the following inputs:
    ።  file               *string
    ።  multiplier         *number
  
    Optional (default is "_id"):
    ።  index              *string
  
    example: jsonX --run myFile.json 500 user_id
    `);
}

function isJson(file) {
  const fileNameLength = file.toString().length;
  const last5 = file.toString().slice(fileNameLength - 5, fileNameLength);

  if (last5 === '.json') {
    return true;
  }

  return false;
}

module.exports = { showHelp, isJson };
