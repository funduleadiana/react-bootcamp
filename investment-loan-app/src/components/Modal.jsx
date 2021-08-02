import React from "react";
import Modal from "react-modal";

const LoanModal = ({ openModal, handleCloseModal }) => (
  <Modal
    ariaHideApp={false}
    isOpen={openModal}
    contentLabel="Selected Loan"
    onRequestClose={handleCloseModal}
    className="modal"
  >
    <h3 className="modal__title">Selected </h3>

    <button className="button" onClick={handleCloseModal}>
      Close
    </button>
  </Modal>
);

export default LoanModal;
