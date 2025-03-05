const multer = require('multer');
const path = require('path')

// set our multer storage
const storage = multer.diskStorage({
    destination : function(req,file,cb) {
        cb(null,"uploads/")
    },
    filename : function(req,file,cb){
        cb(null,
            file.fieldname +"-"+Date.now() + path.extname(file.originalname)
        )
    }
});

// file filter function here 
const checkFileFilter = (req,file,cb) => {
    console.log("req getting",`coming`);
    if(file.mimetype.startsWith('image')){
        console.log("req getting",req);
        cb(null,true)
    }else{
        cb(new Error("Not any image ! Please upload an image here"))
    }
}


// multer middleware
module.exports = multer({
    storage : storage,
    fileFilter : checkFileFilter,
    limits : {
        fileSize : 5*1024*1024 // this is 5 mb file limit
    },
});