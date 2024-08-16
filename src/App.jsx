import "./styles/App.css";
import Dados from "./components/Dados";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [rate, setRate] = useState("");
  const [type, setType] = useState(""); // Adicionar o estado `type`
  const [result, setResult] = useState(null);

  const calculateRepayments = () => {
    if (amount && years && rate && type) {
      const principal = parseFloat(amount.replace(/,/g, ""));
      const interestRate = parseFloat(rate) / 100 / 12;
      const numberOfPayments = parseInt(years) * 12;

      const repayment =
        (principal * interestRate) /
        (1 - Math.pow(1 + interestRate, -numberOfPayments));

      const totalRepayment = repayment * numberOfPayments;

      setResult({
        monthlyRepayment: repayment.toFixed(2),
        totalRepayment: totalRepayment.toFixed(2),
      });
    } else {
      console.log("Please fill out all fields.");
    }
  };

  const clearAll = () => {
    setAmount("");
    setYears("");
    setRate("");
    setType("");
    setResult(null);
  };

  return (
    <>
      <main>
        <Dados
          amount={amount}
          setAmount={setAmount}
          years={years}
          setYears={setYears}
          rate={rate}
          setRate={setRate}
          type={type} // Passar `type`
          setType={setType} // Passar `setType`
          calculateRepayments={calculateRepayments}
          clearAll={clearAll}
        />
        <Result resultado={result} />
      </main>
    </>
  );
}

export default App;
