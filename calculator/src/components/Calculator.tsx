import { Fragment, useState } from "react";
import { evaluate } from "mathjs";
import "./Calculator.css";

const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
const calcOperators = ["+", "-", "×", "÷"];
const equalSign = "=";
const clearSign = "C";
const getLastChar = (str: string) => (str.length ? str[str.length - 1] : "");
const isNumber = (str: string) => !isNaN(Number(str));

export const calculateExpression = (expression: string) => {
  if (!expression || expression.length === 0) {
    return;
  }
  const mulRegex = /×/g;
  const divRegex = /÷/g;
  const divideByZero = /\/0/g;
  let toEvaluate = expression.replace(mulRegex, "*").replace(divRegex, "/");
  try {
    if (divideByZero.test(toEvaluate)) {
      throw new Error("Can not divide by 0!");
    }
    const lastCharacterIsNumber = isNumber(getLastChar(toEvaluate));

    if (!lastCharacterIsNumber) {
      toEvaluate = toEvaluate.slice(0, -1);
    }

    const result = evaluate(toEvaluate);

    return result;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};
const Calculator = () => {
  const [value, setValue] = useState("");
  const calculate = () => {
    const results = calculateExpression(value);
    setValue(results);
  };
  const clearValue = () => setValue("");
  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input
        type="text"
        defaultValue={value}
        placeholder="calculate"
        disabled
      />
      <div className="calculator-btn-container">
        <div role="grid">
          {rows.map((row, i) => {
            return (
              <Fragment key={row.toString()}>
                <div role="row">
                  {i === 3 && <button onClick={clearValue}>{clearSign}</button>}
                  {row.map((n) => (
                    <button
                      onClick={() => setValue(value.concat(n.toString()))}
                      key={n}
                    >
                      {n}
                    </button>
                  ))}
                  {i === 3 && <button onClick={calculate}>{equalSign}</button>}
                </div>
              </Fragment>
            );
          })}
        </div>
        <div className="calculator-operators">
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
    </div>
  );
};

export default Calculator;
