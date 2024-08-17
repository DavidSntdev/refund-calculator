import "./styles/App.css";
import Dados from "./components/Dados";
import Result from "./components/Result";
import { useState } from "react";
import { calculateRepayments } from "./components/utils/calculateRepayments";
import { validateFields } from "./components/utils/validateFields";

function App() {
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [rate, setRate] = useState("");
  const [type, setType] = useState("");
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  
  const handleCalculateRepayments = () => {
    if (validateFields(amount, years, rate, type, setErrors)) {
      const result = calculateRepayments(amount, years, rate);
      setResult(result);
    }
  };

  const clearAll = () => {
    setAmount("");
    setYears("");
    setRate("");
    setType("");
    setResult(null);
    setErrors({});
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
          calculateRepayments={handleCalculateRepayments}
          clearAll={clearAll}
          errors={errors}
        />
        <Result resultado={result} />
      </main>
    </>
  );
}

export default App;
