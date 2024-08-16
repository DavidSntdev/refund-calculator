import "../styles/Form.css";
import Amount from "./form/Amount";
import Type from "./form/Type";
import Years from "./form/Years";
import Rate from "./form/Rate";

function Form() {
  return (
    <form action="" method="get">
      <Amount />
      <div id="years-rate">
        <Years />
        <Rate />
      </div>
      <Type />
    </form>
  );
}

export default Form;
