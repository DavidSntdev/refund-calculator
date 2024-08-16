import "./styles/App.css";
import Dados from "./components/Dados";
import Result from "./components/Result";
import { useState } from "react";
import { calculateRepayments } from "./components/utils/calculateRepayments"; 

function App() {
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [rate, setRate] = useState("");
  const [type, setType] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculateRepayments = () => {
    const result = calculateRepayments(amount, years, rate);
    setResult(result);
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
          type={type}
          setType={setType}
          calculateRepayments={handleCalculateRepayments} // Passar a nova função
          clearAll={clearAll}
        />
        <Result resultado={result} />
      </main>
    </>
  );
}

export default App;
