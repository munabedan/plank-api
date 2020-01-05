var records = require('./records');
var utils = require('./utils');
var fs = require('fs');


const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
}

app.on('ready', createWindow)
//tests
//records.create("mine.txt","f"); 
//records.rename("mine.txt","yours.txt");
//records.create("mine","d"); 
//records.eliminate('./mine',"d");
//records.duplicate("yours.txt","./")

//utils tests
//const testFolder = '.';

//utils.listfile(testFolder);
//utils.listdir(testFolder);
/*
var path = require('path');
const testFolder = '/test.tar.gz';
ext=testFolder.split(".");
ext.shift();

console.log(ext);*/
