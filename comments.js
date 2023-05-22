// Create web server using express
// 1. npm init -y
// 2. npm install express
// 3. npm install body-parser
// 4. node comments.js

// Import express module
const express = require('express');
// Create express app
const app = express();
// Import body-parser module
const bodyParser = require('body-parser');
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());

// Create data
let comments = [
    { id: 1, author: 'Nguyen Van A', content: 'Hello' },
    { id: 2, author: 'Nguyen Van B', content: 'Hi' },
    { id: 3, author: 'Nguyen Van C', content: 'Hey' }
];

// Get all comments
app.get('/api/comments', (req, res) => {
    res.send(comments);
});

// Get a comment by id
app.get('/api/comments/:id', (req, res) => {
    // Get id from request
    let id = parseInt(req.params.id);
    // Find comment by id
    let comment = comments.find(c => c.id === id);
    // If comment not found
    if (!comment) {
        return res.status(404).send('The comment with the given ID was not found.');
    }
    // If comment found
    res.send(comment);
});

// Create a new comment
app.post('/api/comments', (req, res) => {
    // Get data from request body
    let author = req.body.author;
    let content = req.body.content;
    // Create new comment
    let comment = {
        id: comments.length + 1,


