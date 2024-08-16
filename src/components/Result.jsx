import imgEmpty from "../assets/images/illustration-empty.svg";
import "../styles/Result.css";

function Result() {
  let resultado = false;
  return (
    <div
      id="result"
      style={{
        textAlign: resultado && "left",
        justifyContent: resultado && "normal",
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
              <h1>£1,797.74</h1>
            </div>
            <hr />
            <div id="resultTotal">
              <p>Total you&apos;ll repay over the term</p>
              <h1>£539,322.94</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Result;
