import { useState } from "react";

function Amount() {
  const [isAmountFocused, setIsAmountFocused] = useState(false);

  const [displayValue, setDisplayValue] = useState("");

  const formatNumber = (num) => (!num ? "" : Number(num).toLocaleString("en"));

  const handleChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    setDisplayValue(formatNumber(rawValue));
  };

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
          type="text"
          name="Amount"
          id="amount"
          required
          className="inputNumber"
          onFocus={() => setIsAmountFocused(true)}
          onBlur={() => setIsAmountFocused(false)}
          value={displayValue}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default Amount;
