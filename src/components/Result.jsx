import PropTypes from "prop-types";
import imgEmpty from "../assets/images/illustration-empty.svg";
import "../styles/Result.css";
import { formatNumber } from "./utils/formatNumber";

function Result({ resultado }) {
  const resultadoMensal = resultado
    ? `£${formatNumber(resultado.monthlyRepayment)}`
    : "";
  const resultadoTotal = resultado
    ? `£${formatNumber(resultado.totalRepayment)}`
    : "";

  return (
    <div
      id="result"
      style={{
        textAlign: resultado ? "left" : "center",
        justifyContent: resultado ? "normal" : "center",
      }}
    >
      {!resultado ? (
        <>
          <img src={imgEmpty} alt="" width={200} />
          <h1>Results shown here</h1>
          <p>
            Complete the form and click &quot;calculate repayments&quot; to see
            what your monthly repayments would be
          </p>
        </>
      ) : (
        <>
          <div id="resultText">
            <h1>Your results</h1>
            <p>
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              “calculate repayments” again.
            </p>
          </div>
          <div id="resultados">
            <div id="resultMes">
              <p>Your monthly repayments</p>
              <h1>{resultadoMensal}</h1>
            </div>
            <hr />
            <div id="resultTotal">
              <p>Total you&apos;ll repay over the term</p>
              <h1>{resultadoTotal}</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

Result.propTypes = {
  resultado: PropTypes.shape({
    monthlyRepayment: PropTypes.number.isRequired,
    totalRepayment: PropTypes.number.isRequired,
  }),
};

export default Result;