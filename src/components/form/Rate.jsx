import { useState } from "react";
import PropTypes from "prop-types";

function Rate({ value, setValue, error }) {
  const [isRateFocused, setIsRateFocused] = useState(false);

  const formatNumber = (num) => {
    if (num < 0) return "0.00";
    if (num > 100) return "100.00";
    return Number(num).toFixed(2);
  };

  const handleChange = (e) =>
    isNaN(e.target.value) ? setValue("") : setValue(e.target.value);

  const handleBlur = () => {
    setIsRateFocused(false);
    const numericValue = parseFloat(value);
    isNaN(numericValue) ? setValue("") : setValue(formatNumber(numericValue));
  };

  return (
    <div id="rate">
      <label htmlFor="getRate">Interest Rate</label>
      <div
        id="rateCase"
        style={{
          borderColor: isRateFocused
            ? "var(--colorLime)"
            : error && "red",
        }}
      >
        <input
          type="text"
          name="Rate"
          id="getRate"
          required
          className="inputNumber"
          onFocus={() => setIsRateFocused(true)}
          onBlur={handleBlur}
          value={value}
          onChange={handleChange}
          placeholder="0.00"
        />
        <label
          htmlFor="getRate"
          id="rateText"
          style={{
            backgroundColor: isRateFocused
              ? "var(--colorLime)"
              : error && "red",
            color: isRateFocused
              ? "var(--colorSlate900)"
              : error && "white",
          }}
        >
          %
        </label>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

Rate.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Rate;
