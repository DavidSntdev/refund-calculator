import { useState } from "react";
import PropTypes from "prop-types";
import { formatNumber } from "../utils/formatNumber";

function Amount({ value, setValue }) {
  const [isAmountFocused, setIsAmountFocused] = useState(false);

  const handleChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    setValue(formatNumber(rawValue));
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
          value={value}
          onChange={handleChange}
          placeholder="0,000"
        />
      </div>
    </>
  );
}

Amount.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Amount;
