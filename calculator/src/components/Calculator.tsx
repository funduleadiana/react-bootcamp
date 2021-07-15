import { Fragment, useState } from "react";

const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
const calcOperators = ["+", "-", "×", "÷"];
const equalSign = "=";
const clearSign = "C";
const Calculator = () => {
  const [value, setValue] = useState("");
  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input
        type="text"
        defaultValue={value}
        placeholder="calculate"
        disabled
      />
      <div role="grid">
        {rows.map((row, i) => {
          return (
            <Fragment key={row.toString()}>
              <div role="row">
                {i === 3 && <button>{clearSign}</button>}
                {row.map((n) => (
                  <button
                    onClick={() => setValue(value.concat(n.toString()))}
                    key={n}
                  >
                    {n}
                  </button>
                ))}
                {i === 3 && <button>{equalSign}</button>}
              </div>
            </Fragment>
          );
        })}
        {calcOperators.map((operator) => (
          <button
            onClick={() => setValue(value.concat(operator))}
            key={operator}
          >
            {operator.toString()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
