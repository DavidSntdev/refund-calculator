import { useState } from "react";

function Type() {
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
    <>
      <p>Montage Type</p>
      <label
        htmlFor="repayment"
        className="typelabel"
        style={{
          borderWidth: isRepaymentSelected && "3px",
          borderColor: isRepaymentSelected && "var(--colorLime)",
          backgroundColor: isRepaymentSelected && "var(--colorLime100)",
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
          borderWidth: isInterestSelected && "3px",
          borderColor: isInterestSelected && "var(--colorLime)",
          backgroundColor: isInterestSelected && "var(--colorLime100)",
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
    </>
  );
}

export default Type;
