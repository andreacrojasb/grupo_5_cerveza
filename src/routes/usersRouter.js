const express = require ('express');
const router = express.Router();
const userController = require ('../controllers/userController');
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/uploads/avatars'));
    },
    filename: function (req, file, cb) {
        console.log()
        cb(null, req.body.email + '-' + Date.now() + path.extname(file.originalname))
    }
})
   
var upload = multer({ storage: storage })

router.get('/register', userController.register );
router.post('/register',upload.single('avatar'), userController.save );

router.get('/login', userController.login );

module.exports = router;