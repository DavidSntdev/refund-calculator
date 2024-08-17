import { useState } from "react";
import PropTypes from "prop-types";
import { formatNumber } from "../utils/formatNumber";

function Amount({ value, setValue, error }) {
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
            : error && "red",
        }}
      >
        <label
          id="amountText"
          htmlFor="amount"
          style={{
            backgroundColor: isAmountFocused
              ? "var(--colorLime)"
              : error && "red",
            color: isAmountFocused
              ? "var(--colorSlate900)"
              : error && "white",
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
      {error && <p className="error">{error}</p>}
    </>
  );
}

Amount.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Amount;
