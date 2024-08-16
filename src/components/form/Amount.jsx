import { useState } from "react";

function Amount() {
  const [isAmountFocused, setIsAmountFocused] = useState(false);

  return (
    <>
      <label htmlFor="amount">Mortgage Amount</label>
      <div
        id="amountCase"
        style={{
          borderColor: isAmountFocused
            ? "var(--colorLime)"
            : "var(--colorSlate700)",
        }}
      >
        <label
          id="amountText"
          htmlFor="amount"
          style={{
            backgroundColor: isAmountFocused
              ? "var(--colorLime)"
              : "var(--colorSlate100)",
            color: isAmountFocused
              ? "var(--colorSlate900)"
              : "var(--colorSlate700)",
          }}
        >
          £
        </label>
        <input
          type="number"
          name="Amount"
          id="amount"
          required
          className="inputNumber"
          onFocus={() => setIsAmountFocused(true)}
          onBlur={() => setIsAmountFocused(false)}
        />
      </div>
    </>
  );
}

export default Amount;
