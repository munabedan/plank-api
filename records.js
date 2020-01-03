var fs = require('fs');
var records={
    duplicate : function(source,destination){
        fs.copyFile(source, destination+source+"-copy", function(err){
            if (err) throw err;
            console.log('copied ');
          });
    },

    relocate :function(){

    },

    eliminate :function(path,option){
        if(option=="f"){
            fs.unlink((path),function(err){
                if(err) throw err;
                console.log("removed");
        });
        }
        else if(option=="d"){
            fs.rmdir((path),function(err){
                if(err) throw err;
                console.log("removed");
            });
        }
    },

    create :function(filename,option){
        if(option=="f"){
            fs.open(filename, 'w', function (err, file) {
            if (err) throw err;
            console.log("saved");
            });
        }
        else if(option =="d"){
            fs.mkdir(filename,function(err){
                if(err) throw err;
                console.log("created");
            });
        } 
    },
    rename :function(currfilename,newfilename){
        fs.rename(currfilename, newfilename, function (err) {
            if (err) throw err;
            console.log('File Renamed!');
        });
    }
};
module.exports=records