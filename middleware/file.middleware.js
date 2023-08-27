const multer = require('multer');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, "images/")
    },
    filename(req, file, cb) {
        cb(null, new Date().toDateString() + '-' + file.originalname)
    }
})

const types = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

const fileFilter = (req, file, cb) => {
    if (types.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
} 

module.exports = multer({storage, fileFilter})