# JSON Multiplier
JSON Multiplier is a script to multiply the objects inside a JSON file.
Is extremely useful to generate mock data to tests Databases, API Requests, Programming Functions, and anything you need.

## UPDATE - NEW VERSION
### Version 1.0.2
Release date: 09/12/2023

Changes:
* Fix error during saving of result files
  JSON Multiplier now creates a "jsonX" folder on your desktop to import / save files.
* Now you need to type --run with the desire input to execute the multiplication of json files
* Add Troubleshooting documentation
* JSON Multiplier now has a RAW version to use in case of any unexpected issues with npm version.
  For more info please check: ``` https://github.com/monsterkosh ```


### How to use ?

Install JSON Multiplier Globally

``` npm install -g json-multiplier ```

And JSON Multiplier will be installed globally to your system path.

Run ```$ jsonX``` on you terminal and JSON Multiplier will create a "jsonX" folder on you local machine Desktop.
Grab a JSON file with only 1 object inside, and put this file inside this jsonX folder.

If you want, you can run ```$ jsonX``` a second time to make sure it reads the files inside the directory.

Type in terminal `` jsonX --run `` with the following arguments:

    ።  file               *string
    ።  multiplier         *number
  
    Optional (default is "_id"):
    ።  index              *string

  example: ``` jsonX --run myFile.json 500 user_id ```

### Where are my results ? 
JSON Multiplier will create a folder called "results" and save the results of your call in a file called:
jsonX-{yourFileName}-{multiplier-received}.json

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

### Troubleshooting
If you encounter some ```-2 ENON``` errors, it's probably due to the lack of read/write permissions in the Desktop folder.
To solve this, create a "jsonX" folder on your Desktop. And a "results" folder inside the "jsonX" one.

If you continue to have issues please use the JSON Multiplier RAW Version available on: ``` https://github.com/monsterkosh ```
And don't forget to report this issues to me so I can fix them on the next version.

### Contact and Contribution
Please feel free con contribute to the project on ``` https://github.com/monsterkosh ```
Or contact me on ``` https://www.linkedin.com/in/emilianokosh-developer/ ```



