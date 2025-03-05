const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require('../middleware/admin-middleware');
const uploadMiddleware = require('../middleware/upload-middleware');
const {uploadImageController} = require('../controllers/image-controllers');

const router = express.Router();

// upload the image
router.post('/upload',authMiddleware,adminMiddleware,uploadMiddleware.single('image'), (req, res) => {
    try {
        console.log('File uploaded:', req.file);  // Check the uploaded file
        // res.send('File uploaded successfully');
    } catch (error) {
        console.error('Error uploading file:', error);
        // res.status(400).send(error.message);
    }
},uploadImageController);


// get all image 
// router.get('/get',);

module.exports = router;