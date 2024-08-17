import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Type({ type, setType }) {
  const [isInterestSelected, setIsInterestSelected] = useState(
    type === "interest"
  );
  const [isRepaymentSelected, setIsRepaymentSelected] = useState(
    type === "repayment"
  );

  useEffect(() => {
    setIsInterestSelected(type === "interest");
    setIsRepaymentSelected(type === "repayment");
  }, [type]);

  const handleRadioChange = (e) => {
    const selectedType = e.target.id;
    setType(selectedType);
    setIsInterestSelected(selectedType === "interest");
    setIsRepaymentSelected(selectedType === "repayment");
  };

  return (
    <>
      <p>Mortgage Type</p>
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
          checked={isRepaymentSelected}
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
          checked={isInterestSelected}
          required
        />
        Interest Only
      </label>
    </>
  );
}

Type.propTypes = {
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired,
};

export default Type;
