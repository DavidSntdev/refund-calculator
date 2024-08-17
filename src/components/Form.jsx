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
  errors,
}) {
  return (
    <form method="get">
      <Amount value={amount} setValue={setAmount} error={errors.amount} />
      <div id="years-rate">
        <Years value={years} setValue={setYears} error={errors.years} />
        <Rate value={rate} setValue={setRate} error={errors.rate} />
      </div>
      <Type type={type} setType={setType} error={errors.type} />
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
  errors: PropTypes.shape({
    amount: PropTypes.string,
    years: PropTypes.string,
    rate: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default Form;
