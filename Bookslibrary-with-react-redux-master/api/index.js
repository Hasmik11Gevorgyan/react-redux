const express = require('express');
const cors = require('cors');
const booksData = require('../data/books.json'); // Assuming books.json is in the data folder

const app = express();
app.use(cors());

function getRandomBooks(){
return booksData[Math.floor(Math.random() * booksData.length)] 
}

app.get("/random-book", (req, res) => {
    res.json(getRandomBooks());
});

app.get("/random-book- delayed", (req, res) =>  setTimeout(()=>res.json(getRandomBooks()),3000))

const port = process.env.PORT || 8888;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})