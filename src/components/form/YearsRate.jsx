import { useState } from "react";

function YearsRate() {
  const [isYearsFocused, setIsYearsFocused] = useState(false);
  const [isRateFocused, setIsRateFocused] = useState(false);
  return (
    <>
      <div id="years-rate">
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
              type="number"
              name="Term"
              id="getYears"
              className="inputNumber"
              onFocus={() => setIsYearsFocused(true)}
              onBlur={() => setIsYearsFocused(false)}
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
              type="number"
              name="Rate"
              id="getRate"
              required
              className="inputNumber"
              onFocus={() => setIsRateFocused(true)}
              onBlur={() => setIsRateFocused(false)}
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
      </div>
    </>
  );
}

export default YearsRate;
