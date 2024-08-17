import { useState } from "react";
import PropTypes from "prop-types";

function Years({ value, setValue, error }) {
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
              : error && "red",
          }}
        >
          <input
            type="text"
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
                : error && "red",
              color: isYearsFocused
                ? "var(--colorSlate900)"
                : error && "white",
            }}
          >
            years
          </label>
        </div>
        {error && <p className="error" id="errorYears">{error}</p>}
      </div>
    </>
  );
}

Years.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Years;
