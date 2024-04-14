const express = require('express');
const app = express();

app.use(express.json());

// Function to perform subtraction of two numbers
function subtract(X, Y) {
    // Calculate the difference
    const difference = X - Y;

    // Return the result
    return difference;
}

app.post('/', (req, res) => {
    const { X, Y } = req.body;

    // Call the subtract function with X and Y
    const result = subtract(X, Y);

    const response = {
        "X": X,
        "Y": Y,
        "Result": result
    };

    res.json(response);
});

app.listen(8080, () => {
    console.log('Server is up on 8080');
});
