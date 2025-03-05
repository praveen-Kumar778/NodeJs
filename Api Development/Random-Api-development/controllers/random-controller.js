const randomModel  = require("../models/RandomModel")

const getAllData = async(req,res) =>{
    try{
        const getAllRandomData = await randomModel.find({});
        if(getAllRandomData?.length > 0){
            res.status(200).json({
                success : true,
                message : "All Data on the List is ",
                data : getAllRandomData, 
            })
        }else{
            res.status(404).json({
                success: false,
                message:"Some error Occured ...",
            })
        }

    }catch(error){
        console.log(error);

        res.status(500).json({
            success : false ,
            message : "There is some error occuuring",
        })
        
    }
}

const getSingleData = async(req,res) =>{
    try{
        const id = req.params.id ; 
        const getSingleData = await randomModel.findById(id);
        if(getSingleData){
            res.status(200).json({
                success : true,
                message : `The data with id  ${id} is here`,
                data : getSingleData, 
            })
        }else{
            res.status(404).json({
                success: false,
                message:"There is no data with this id",
            })
        }

    }catch(error){
        console.log(error);

        res.status(500).json({
            success : false ,
            message : "There is some error occuuring",
        })
        
    }
}

const addData = async(req,res) =>{
    try{
        const body = req.body ;
        const addData = await randomModel.create(body);
        if(addData){
            res.status(200).json({
                success : true,
                message : `The data added successfully`,
                data : addData, 
            });
        }
    }catch(error){
        console.log(error);

        res.status(500).json({
            success : false ,
            message : "There is some error occuuring",
        })
        
    }
}

const updateData = async(req,res) =>{
    try{
        const id = req.params.id ; 
        const body  = req.body;
        const updateSingleData = await randomModel.findByIdAndUpdate(id,body,{
            new : true,
        });
        if(updateSingleData){
            res.status(200).json({
                success : true,
                message : `The data with id  ${id} is updated Successfully`,
                data : updateSingleData, 
            })
        }else{
            res.status(404).json({
                success: false,
                message:"Error Occurimg While adding Data",
            })
        }

    }catch(error){
        console.log(error);

        res.status(500).json({
            success : false ,
            message : "There is some error occuuring",
        })
        
    }
}

const deleteData = async(req,res) =>{
    try{
        const id = req.params.id ; 
        const deleteSingleData = await randomModel.findByIdAndDelete(id);
        if(deleteSingleData){
            res.status(200).json({
                success : true,
                message : `The data with id  ${id} is deleted Successfully`,
                data : deleteSingleData, 
            })
        }else{
            res.status(404).json({
                success: false,
                message:"Error Occurimg While adding Data",
            })
        }

    }catch(error){
        console.log(error);

        res.status(500).json({
            success : false ,
            message : "There is some error occuuring",
        })
        
    }
}


module.exports = {
    getAllData,getSingleData,addData,updateData,deleteData
}