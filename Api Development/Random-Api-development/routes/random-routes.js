const express = require("express");
const {getAllData,getSingleData,addData,updateData,deleteData} = require("../controllers/random-controller")

const router = express.Router();

router.get('/get',getAllData);
router.get('/get/:id',getSingleData);
router.post('/add',addData);
router.put('/update/:id',updateData);
router.delete('/delete/:id',deleteData);


module.exports = router ;