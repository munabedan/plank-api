var fs = require('fs');
var path = require('path');


var utils ={
    listdir: function(directory){
       fs.readdir(directory,function(err,files){
            if(err) throw err;
            files.forEach(function(file){
                fs.lstat(file, (err, stats) => {
                    if(err) throw err;
                    if(stats.isDirectory()){
                      console.log(file)
                    }
                });
            });
        });
    },

    listfile: function(directory){
        fs.readdir(directory,function(err,files){
             if(err) throw err;
             files.forEach(function(file){
                 fs.lstat(file, (err, stats) => {
                     if(err) throw err;
                     if(stats.isFile()){
                       console.log(file)
                    }
                });
             });
        });
    },

    //returns an array of extension tags
    getextension: function(filename){
        ext=filename.split(".");
        ext.shift();
        console.log(ext);
    }
}
module.exports=utils