function calculateSimpleInterest(principal, rate, time) {
  // Input validation
  if (principal <= 0 || rate <= 0 || time <= 0 || isNaN(principal) || isNaN(rate) || isNaN(time)) {
    throw new Error("All arguments must be positive numbers.");
  }

  // Formula: SI = (P * R * T) / 100
  const interest = (principal * rate * time) / 100;
  const totalAmount = principal + interest;

  return {
    principal: Number(principal.toFixed(2)),
    interest: Number(interest.toFixed(2)),
    totalAmount: Number(totalAmount.toFixed(2))
  };
}

// Example usage:
const result = calculateSimpleInterest(10000, 5, 2); // $10,000 at 5% for 2 years
console.log(`Principal: $${result.principal}`);
console.log(`Interest: $${result.interest}`);
console.log(`Total Amount: $${result.totalAmount}`);