const fs = require('fs');
const path = require('path');

function showHelp() {
  console.log(`JSON Multiplier requires the following inputs:

  -  file               string
  -  multiplier         number

  Optional (default is "_id"):
  -  index              string 

  example: node jsonM.js myFile.json 500 user_id
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

(function main() {
  // TODO: Remove case sensitive

  console.log(`
 ┏┳┏┓┏┓┳┓  ┳┳┓┳┳┓ ┏┳┓┳┏┓┓ ┳┏┓┳┓
  ┃┗┓┃┃┃┃  ┃┃┃┃┃┃  ┃ ┃┃┃┃ ┃┣ ┣┫
 ┗┛┗┛┗┛┛┗  ┛ ┗┗┛┗┛ ┻ ┻┣┛┗┛┻┗┛┛┗
  `);

  const firstArg = String(process.argv[2]);
  const multiplier = Number(process.argv[3]);
  let indexName = process.argv[4];

  if (firstArg === '--help') {
    showHelp();
    return;
  }

  if (!isJson(firstArg)) {
    console.log('Please use --help to show how to use JSON.Multiplier');
    return;
  }

  if (Number.isNaN(multiplier)) {
    console.log('Missing multiplier');
    return;
  }

  let json;

  try {
    json = fs.readFileSync(`./${firstArg}`, {
      encoding: 'utf8',
      flag: 'r',
    });
  } catch {
    console.log(
      `Error: cannot read file "${firstArg}" or file does not exists`
    );
    return;
  }

  const data = JSON.parse(json);

  const result = [];
  const indexValue = '000000000000000000000000';

  if (indexName) {
    indexName = String(indexName);
    for (let i = 0; i < multiplier; i++) {
      const element = Object.assign({}, data[0]);
      element[indexName] = indexValue + i;

      result.push(element);
    }
  } else {
    for (let i = 0; i < multiplier; i++) {
      const element = Object.assign({}, data[0]);
      element._id = { $oid: indexValue + i };

      result.push(element);
    }
  }

  const jsonResult = JSON.stringify(result);

  const folderName = 'results';
  const fileName = firstArg.toString().slice(0, -5);

  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }

  fs.writeFileSync(
    path.join(__dirname, 'results', `jsonM_${fileName}_results.json`),
    jsonResult
  );

  console.log(
    `JSON file "${fileName}" was multiplied by ${multiplier} using ${
      indexName ?? '_id'
    } as index`
  );

  console.log(
    `Results saved on folder "results" under the name "jsonM_${fileName}_results.json" `
  );
})();
