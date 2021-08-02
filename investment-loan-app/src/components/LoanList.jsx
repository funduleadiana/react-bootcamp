// import { LoanCard } from "./LoanCard";
// import React from "react";

// const LoanList = ({ loans }) => {
//   // const totalAmount = loans.reduce((acc, amount) => acc + amount.available, 0);
//   const availableAmounts = loans.map((loan) => loan.available);
//   const eachAmount = availableAmounts.map(
//     (amount) => +amount.split(",").join("")
//   );
//   const totalAmounts = eachAmount.reduce((acc, amount) => acc + amount, 0);
//   return (
//     <div>
//       {loans.map((list) => {
//         return (
//           <LoanCard
//             amount={list.available}
//             key={list.id}
//             name={list.title}
//             term={list.term_remaining}
//           />
//         );
//       })}
//       <div>
//         Total amount available for investment:
//         {totalAmounts.toLocaleString("en-UK", {
//           style: "currency",
//           currency: "GBP",
//         })}
//       </div>
//     </div>
//   );
// };

// export default LoanList;
