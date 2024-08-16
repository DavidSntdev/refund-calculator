import { useState } from "react";
import PropTypes from "prop-types";

function Years({ value, setValue }) {
  const [isYearsFocused, setIsYearsFocused] = useState(false);

  const formatNumber = (num) => {
    if (num < 0) return "0";
    if (num > 125) return "125";
    return num;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      const formattedValue = formatNumber(value);
      setValue(formattedValue);
    }
  };

  return (
    <>
      <div id="years">
        <label htmlFor="getYears">Mortgage term</label>
        <div
          id="yearsCase"
          style={{
            borderColor: isYearsFocused
              ? "var(--colorLime)"
              : "var(--colorSlate700)",
          }}
        >
          <input
            type="text" // Change from "number" to "text"
            name="Term"
            id="getYears"
            className="inputNumber"
            onFocus={() => setIsYearsFocused(true)}
            onBlur={() => setIsYearsFocused(false)}
            value={value}
            onChange={handleChange}
            placeholder="00"
            required
          />
          <label
            id="yearsText"
            htmlFor="getYears"
            style={{
              backgroundColor: isYearsFocused
                ? "var(--colorLime)"
                : "var(--colorSlate100)",
              color: isYearsFocused
                ? "var(--colorSlate900)"
                : "var(--colorSlate700)",
            }}
          >
            years
          </label>
        </div>
      </div>
    </>
  );
}

Years.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Years;
