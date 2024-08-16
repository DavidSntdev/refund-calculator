import "../styles/Form.css";
import Amount from "./form/Amount";
import Type from "./form/Type";
import Years from "./form/Years";
import Rate from "./form/Rate";
import PropTypes from "prop-types";

function Form({
  amount,
  setAmount,
  years,
  setYears,
  rate,
  setRate,
  type,
  setType,
}) {
  return (
    <form action="" method="get">
      <Amount value={amount} setValue={setAmount} />
      <div id="years-rate">
        <Years value={years} setValue={setYears} />
        <Rate value={rate} setValue={setRate} />
      </div>
      <Type type={type} setType={setType} /> 
    </form>
  );
}

Form.propTypes = {
  amount: PropTypes.string.isRequired,
  setAmount: PropTypes.func.isRequired,
  years: PropTypes.string.isRequired,
  setYears: PropTypes.func.isRequired,
  rate: PropTypes.string.isRequired,
  setRate: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired,
};

export default Form;
