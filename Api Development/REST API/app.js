const express = require('express');

const app = express();

// MiddleWare
app.use(express.json());

let books = [
    {
        id: 1,
        title: "Book 1"
    }, {
        id: 2,
        title: "Book 2"
    }, {
        id: 3,
        title: "Book 3"
    }
];


// intro route
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to our bookstore api",
    })
});

// get all books 
app.get('/get', (req, res) => {
    res.json(books);
});

// get a particular id 
app.get('/get/:id', (req, res) => {
    console.log("Hitting the id here", req.params.id);

    const oneId = parseInt(req.params.id);
    const fetchId = books.find(product => product.id === oneId);
    if (fetchId) {
        res.status(200).json(fetchId);
    } else {
        res.status(404).json({
            message: "There is no data with this id here",
        })
    }
});

app.post('/add', (req, res) => {
    const newBooK = {
        id: Math.floor(Math.random() * 1000),
        title: `Books ${Math.floor(Math.random() * 1000)}`
    }
    books.push(newBooK);
    res.status(200).json({
        data: newBooK,
        message: "New Book Added successfully"
    });
});


// update a book
app.put('/update/:id', (req, res) => {
    const oId = parseInt(req.params.id);
    const fetchBook = books.find(product => product.id === oId);
    if (fetchBook) {
        fetchBook.title = req.body.title || fetchBook.title;

        res.status(200).json({
            data: fetchBook,
            message: `Book with ID ${req.params.id} is updated successfully`
        });
    } else {
        res.status(404).json({
            message: `Book not Found`
        });
    }
});

app.delete('/delete/:id', (req, res) => {
    const findIndexOfCurrentBook = books.findIndex(items => items.id === parseInt(req.params.id));
    if (findIndexOfCurrentBook !== -1) {
        const deleteBook = books.splice(findIndexOfCurrentBook, 1);
        res.status(200).json({
            message: `Book with ID ${req.params.id} deleted Successfully`,
            data: findIndexOfCurrentBook[0]
        });
    } else {
        res.status(404).json({
            message: `Cannot Find the Book With Id ${req.params.id}`
        });
    }
});
const port = 3000;

app.listen(port, () => {
    console.log(`Server is now running on port ${port}`);
});

