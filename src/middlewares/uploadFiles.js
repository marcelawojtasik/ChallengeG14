const multer = require('multer');
const path = require('path');

//implementación metodo
const storage = multer.diskStorage({    
    destination:(req, file, cb) => {
        //console.log(path.resolve(__dirname, '../../public/img'));
        cb(null, path.resolve(__dirname, '../../public/img'));
},
    filename:(req, file, cb) => {
    //console.log(file);
    cb(null, `${Date.now()}-${file.originalname}`);
}
});

const upload = multer({storage});

module.exports = upload;