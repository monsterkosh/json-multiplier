# JSON Multiplier
JSON Multiplier is a script to multiply the objects inside a JSON file.
Is extremely useful to generate mock data to tests Databases, API Requests, Programming Functions, and anything you need.

### How to use ?

Install JSON Multiplier Globally

`` npm install -g json-multiplier ``

And JSON Multiplier will be installed globally to your system path.

Grab a JSON file with only 1 object inside, put this file in the same folder as the script.
Type in terminal `` jsonX `` with the following arguments:

  -  file               string
  -  multiplier         number

  Optional (default is "_id"):
  -  index              string 

  example: `` jsonX myFile.json 500 user_id ``

### Where are my results ? 
JSON Multiplier will create a folder called "results" and save the results of your call in a filed called:
jsonM_yourFileName_results.json

### How does it work ?
JSON Multiplier reads your json file, grabs the first objects and replicate that same object as many times as you want, changing the _id (or any desire parameter) for each object created.

### Example
Original file:

``` {"user": {
  "id": "000000000000000000000000",
  "name": "John Wick",
  "permissions":[
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
   ]
  }
}
```

$ jsonX users.json 500 id

Results:
```
[
    {"user": {
  "id": "000000000000000000000000",
  "name": "John Wick",
  "permissions":[
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
   ]
  }
},
{"user": {
  "id": "000000000000000000000001",
  "name": "John Wick",
  "permissions":[
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
   ]
  }
},
{"user": {
  "id": "000000000000000000000002",
  "name": "John Wick",
  "permissions":[
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
   ]
  }
},
... 497 more results
]
```


