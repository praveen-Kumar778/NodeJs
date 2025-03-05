const image = require('../models/image');
const { uploadToCloudinary } = require('../helpers/cloudinaryHelper');
const fs = require('fs');

const uploadImageController = async (req, res) => {
    try {
        console.log("reqfile",req.file);
        
        // if file is missing in req object 
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: `File is required ! Please upload an image`
            });
        }

        // upload to cloudinary 
        const { url, publicId } = await uploadToCloudinary(req.file.path);

        // store the image url and public id along with the uploaded user id in database
        const newlyUploadedImage = new image({
            url,
            publicId,
            uploadedBy: req.userInfo.userId
        });

        await newlyUploadedImage.save();
        // delete the previous file from local storage
        fs.unlinkSync(req.file.path);

        res.status(201).json({
            success: true,
            message: ` image uploaded successfully`,
            image: newlyUploadedImage
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Something went wrong while uploading image ! pPlease try again'
        })
    }
}


module.exports = { uploadImageController, };