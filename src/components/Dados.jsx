import PropTypes from "prop-types";
import Form from "./Form";
import "../styles/Dados.css";
import imgCalc from "../assets/images/icon-calculator.svg";

function Dados({
  amount,
  setAmount,
  years,
  setYears,
  rate,
  setRate,
  type,
  setType,
  calculateRepayments,
  clearAll,
}) {
  return (
    <div id="dados">
      <header>
        <h1>Mortgage Calculator</h1>
        <p onClick={clearAll}>Clear All</p>
      </header>
      <Form
        amount={amount}
        setAmount={setAmount}
        years={years}
        setYears={setYears}
        rate={rate}
        setRate={setRate}
        type={type}
        setType={setType} 
      />
      <button onClick={calculateRepayments} id="btnCalc">
        <img src={imgCalc} alt="calcular" /> Calculate Repayments
      </button>
    </div>
  );
}

Dados.propTypes = {
  amount: PropTypes.string.isRequired,
  setAmount: PropTypes.func.isRequired,
  years: PropTypes.string.isRequired,
  setYears: PropTypes.func.isRequired,
  rate: PropTypes.string.isRequired,
  setRate: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired,
  calculateRepayments: PropTypes.func.isRequired,
  clearAll: PropTypes.func.isRequired,
};

export default Dados;
