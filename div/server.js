const express = require('express');
const app = express();

app.use(express.json());

// Function to perform division of two numbers
function divide(X, Y) {
    // Check if Y is not zero to avoid division by zero
    if (Y === 0) {
        throw new Error("Division by zero is not allowed");
    }

    // Calculate the quotient
    const quotient = X / Y;

    // Return the result
    return quotient;
}

app.post('/', (req, res) => {
    const { X, Y } = req.body;

    try {
        // Call the divide function with X and Y
        const result = divide(X, Y);

        const response = {
            "X": X,
            "Y": Y,
            "Result": result
        };

        res.json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(8080, () => {
    console.log('Server is up on 8080');
});
