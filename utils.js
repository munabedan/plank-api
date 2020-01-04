var fs = require('fs');

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
    }
}
module.exports=utils