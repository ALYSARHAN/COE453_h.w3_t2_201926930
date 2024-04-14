const express = require('express');
const app = express();

app.use(express.json());

// Function to perform addition of two numbers
function add(X, Y) {
    // Calculate the sum
    const sum = X + Y;

    // Return the result
    return sum;
}

app.post('/', (req, res) => {
    const { X, Y } = req.body;

    // Call the add function with X and Y
    const result = add(X, Y);

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
