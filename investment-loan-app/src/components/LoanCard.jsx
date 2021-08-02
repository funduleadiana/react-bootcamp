import React from "react";
import "./LoanCard.css";

export const LoanCard = ({ name, term, onOpenModal }) => {
  return (
    <div className="container">
      <div className="content">
        <h4>Loan name: {name}</h4>
        <p>details of loans</p>
        <p>Loan ends in: {Math.floor(Number(term) / 86400)} days</p>
      </div>
      <div>
        <button onClick={onOpenModal} className="button">
          Invest
        </button>
      </div>
    </div>
  );
};
