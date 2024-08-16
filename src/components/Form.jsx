import "../styles/Form.css";
import Amount from "./form/Amount";
import YearsRate from "./form/YearsRate";
import Type from "./form/Type";

function Form() {
  return (
    <form action="" method="get">
      <Amount />
      <YearsRate />
      <Type />
    </form>
  );
}

export default Form;
