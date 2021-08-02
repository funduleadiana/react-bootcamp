// import LoanList from "./components/LoanList";
import { LoanCard } from "./components/LoanCard";
import { loans } from "./assets/Loans";
import "./App.css";
import React from "react";
import LoanModal from "./components/Modal";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loans: [...loans],
      openModal: false,
    };
  }
  handleOpenModal = () => {
    this.setState(() => ({ openModal: true }));
  };
  handleCloseModal = () => {
    this.setState(() => ({ openModal: false }));
  };
  render() {
    const { loans, openModal, handleCloseModal, handleOpenModal } = this.state;
    const availableAmounts = loans.map((loan) => loan.available);
    const eachAmount = availableAmounts.map(
      (amount) => +amount.split(",").join("")
    );
    const totalAmounts = eachAmount.reduce((acc, amount) => acc + amount, 0);

    return (
      <div className="App">
        {loans.map((list) => {
          return (
            <LoanCard
              onOpenModal={handleOpenModal}
              amount={list.available}
              key={list.id}
              name={list.title}
              term={list.term_remaining}
            />
          );
        })}
        <div>
          Total amount available for investment:
          {totalAmounts.toLocaleString("en-UK", {
            style: "currency",
            currency: "GBP",
          })}
        </div>
        <LoanModal
          isOpen={openModal}
          ariaHideApp={false}
          handleCloseModal={handleCloseModal}
        />
      </div>
    );
  }
}

export default App;
