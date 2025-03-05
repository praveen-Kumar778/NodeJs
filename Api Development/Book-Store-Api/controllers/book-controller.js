const BookModel = require('../models/book');


const getAllBooks = async (req, res) => {
    try {
        const allBooks = await BookModel.find({});
        if (allBooks?.length > 0) {
            res.status(200).json({
                success: true,
                message: "Fetched List of Books Successfully",
                data: allBooks,
            });
        } else {
            res.status(404).json({
                success: false,
                message: "No Books Find in collection",
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong please try again",
        })

    }
}

const getSingleBookById = async (req, res) => {
    try {
        const id = req.params.id;
        const oneId = await BookModel.findById(id);

        if (oneId) {
            res.status(200).json({
                success: true,
                message: `Got the single book by id ${id}`,
                data: oneId,
            })
        } else {
            res.status(404).json({
                success: false,
                message: `Book not found with id ${id}`,
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: `There is no such id ${id} number book is present in the database`,
        })

    }
}

const addNewBook = async (req, res) => {
    try {
        const newBookFormData = req.body;
        const newlyCreatedBook = await BookModel.create(newBookFormData);
        if (newlyCreatedBook) {
            res.status(201).json({
                success: true,
                message: 'Book added',
                data: newlyCreatedBook,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong please try again",
        })
    }
}

const updateBook = async (req, res) => {
    try {
        const getBookData = req.body;
        const id = req.params.id;
        const updateId = await BookModel.findByIdAndUpdate(id, getBookData, {
            new: true,
        });

        if(updateId){
            res.status(200).json({
                success : true , 
                message : `Data has been updated successfully with the id ${id} here`,
                data : updateId,
            });
        }else{
            res.status(404).json({
                success : false ,
                message : `Some Error occur while updating the data with id ${id}`,
            })
        }

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "No id found while updating the book ",
        })

    }
}

const deleteBook = async (req, res) => {

    try {
        const id = req.params.id;
        const deleteData = await BookModel.findByIdAndDelete(id);

        if (deleteData) {
            res.status(200).json({
                success: true,
                message: `Book deleted with the ${id}`,
                data: deleteData,
            });
        } else {
            res.status(404).json({
                success: false,
                message: `There is no such ${id} present in database`
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: `There is no such id ${id} number book is present in the database`,
        })

    }
}

module.exports = {
    getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBook
};