import Form from "./Form";
import "../styles/Dados.css";
import imgCalc from "../assets/images/icon-calculator.svg";

function Dados() {
  const $calculeRepayments = () => {};
  const $clearAll = () => {
    
  };
  return (
    <div id="dados">
      <header>
        <h1>Mortgage Calculator</h1>
        <p onClick={$clearAll}>Clear All</p>
      </header>
      <Form />
      <button onClick={$calculeRepayments} id="btnCalc">
        <img src={imgCalc} alt="calcular" /> Calcule Repayments 
      </button>
    </div>
  );
}

export default Dados;
