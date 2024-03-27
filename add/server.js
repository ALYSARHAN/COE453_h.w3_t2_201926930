const express = require('express');
const app = express();

// Import the add function from index.js
const { add } = require('./index');

// Endpoint to handle addition
app.get('/add', (req, res) => {
    // Extract X and Y values from the request query parameters
    const { X, Y } = req.query;

    // Parse X and Y as numbers
    const numX = parseFloat(X);
    const numY = parseFloat(Y);

    // Call the add function with X and Y
    const result = add(numX, numY);

    // Send the result as the response
    res.json({ X: numX, Y: numY, Result: result });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
touch 