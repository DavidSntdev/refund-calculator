import { useState } from "react";

function Rate() {
  const [isRateFocused, setIsRateFocused] = useState(false);
  const [value, setValue] = useState("");

  const formatNumber = (num) => {
    if (num < 0) return "0.00";
    if (num > 100) return "100.00";
    return Number(num).toFixed(2);
  };

  const handleChange = (e) => isNaN(e.target.value) ? setValue("") : setValue(e.target.value);

  const handleBlur = () => {
    setIsRateFocused(false);
    const numericValue = parseFloat(value);
    isNaN(numericValue) ? setValue("") : setValue(formatNumber(numericValue))
  };

  return (
    <div id="rate">
      <label htmlFor="getRate">Interest Rate</label>
      <div
        id="rateCase"
        style={{
          borderColor: isRateFocused
            ? "var(--colorLime)"
            : "var(--colorSlate700)",
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
              : "var(--colorSlate100)",
            color: isRateFocused
              ? "var(--colorSlate900)"
              : "var(--colorSlate700)",
          }}
        >
          %
        </label>
      </div>
    </div>
  );
}

export default Rate;
