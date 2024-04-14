const express = require('express');
const app = express();

app.use(express.json());

// Function to perform multiplication of two numbers
function multiply(X, Y) {
    // Calculate the product
    const product = X * Y;

    // Return the result
    return product;
}

app.post('/', (req, res) => {
    const { X, Y } = req.body;

    // Call the multiply function with X and Y
    const result = multiply(X, Y);

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
