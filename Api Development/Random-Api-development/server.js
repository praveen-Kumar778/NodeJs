const express = require("express")
const db = require("./database/db")
const randomRoutes = require("./routes/random-routes")

const app = express();

db();
const port = process.env.PORT || 8080;
app.use(express.json());

app.use('/api/random', randomRoutes);

app.listen(port, () => {
    console.log(`Server is now running on Port ${port}`);
});