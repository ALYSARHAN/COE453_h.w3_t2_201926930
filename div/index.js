// Function to perform division of two numbers
function divide(X, Y) {
  // Check for division by zero
  if (Y === 0) {
      return "Error: Division by zero";
  }

  // Calculate the quotient
  const quotient = X / Y;

  // Return the result
  return quotient;
}