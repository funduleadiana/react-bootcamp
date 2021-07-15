const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
const calcOperators = ["+", "-", "×", "÷"];
const Calculator = () => {
  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div role="grid">
        {rows.map((row) => {
          return (
            <div key={row.toString()} role="row">
              {row.map((n) => (
                <button key={n}>{n.toString()}</button>
              ))}
            </div>
          );
        })}
        {calcOperators.map((operator) => (
          <button key={operator}>{operator.toString()}</button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
