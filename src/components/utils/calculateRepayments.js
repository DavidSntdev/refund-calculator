export function calculateRepayments(amount, years, rate) {
  if (amount && years && rate) {
    const principal = parseFloat(amount.replace(/,/g, ""));
    const interestRate = parseFloat(rate) / 100 / 12;
    const numberOfPayments = parseInt(years) * 12;

    const repayment =
      (principal * interestRate) /
      (1 - Math.pow(1 + interestRate, -numberOfPayments));

    const totalRepayment = repayment * numberOfPayments;

    return {
      monthlyRepayment: repayment,
      totalRepayment: totalRepayment,
    };
  } else {
    console.log("Please fill out all fields.");
    return null;
  }
}
