import "../styles/Form.css";
import { useState } from "react";

function Form() {
  const [isAmountFocused, setIsAmountFocused] = useState(false);
  const [isYearsFocused, setIsYearsFocused] = useState(false);
  const [isRateFocused, setIsRateFocused] = useState(false);
  const [isInterestSelected, setIsInterestSelected] = useState(false);
  const [isRepaymentSelected, setIsRepaymentSelected] = useState(false);

  const handleRadioChange = (e) => {
    if (e.target.id === "interest") {
      setIsInterestSelected(true);
      setIsRepaymentSelected(false);
    } else if (e.target.id === "repayment") {
      setIsInterestSelected(false);
      setIsRepaymentSelected(true);
    }
  };

  return (
    <form action="" method="get">
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

      <p>Montage Type</p>
      <label
        htmlFor="repayment"
        className="typelabel"
        style={{
          borderWidth: isRepaymentSelected ? "3px" : "1px",
          borderColor: isRepaymentSelected
            ? "var(--colorLime)"
            : "var(--colorSlate700)",
          backgroundColor: isRepaymentSelected
            ? "var(--colorLime100)"
            : "var(--colorWhite)",
        }}
      >
        <input
          type="radio"
          name="Type"
          id="repayment"
          className="type"
          onChange={handleRadioChange}
          required
        />
        Repayment
      </label>
      <label
        htmlFor="interest"
        className="typelabel"
        style={{
          borderWidth: isInterestSelected ? "3px" : "1px",
          borderColor: isInterestSelected
            ? "var(--colorLime)"
            : "var(--colorSlate700)",
          backgroundColor: isInterestSelected
            ? "var(--colorLime100)"
            : "var(--colorWhite)",
        }}
      >
        <input
          type="radio"
          name="Type"
          id="interest"
          className="type"
          onChange={handleRadioChange}
          required
        />
        Interest Only
      </label>
    </form>
  );
}

export default Form;
