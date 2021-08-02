// modal logic
<Modal
  ariaHideApp={false}
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Loan Modal"
>
  <h6>Invest in loan</h6>
  <p>{name}</p>
  <p>
    Amount available:
    {Number(amount.split(",").join("")).toLocaleString("en-UK", {
      style: "currency",
      currency: "GBP",
    })}
  </p>
  <p>Loan ends in: {Math.floor(Number(term) / 86400)} days</p>
  <p>Invest amount</p>
  <input type="number" />
  <button>INVEST</button>
</Modal>;
////////////////////
////////////////////////
const [modalIsOpen, setIsOpen] = React.useState(false);
function openModal() {
  setIsOpen(true);
}
function closeModal() {
  setIsOpen(false);
}
function invest(e) {
  e.preventDefualt();
  setIsOpen(false);
}
