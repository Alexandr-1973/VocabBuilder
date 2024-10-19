import Modal from "react-modal";
import css from "./NavMenu.module.css";
import sprite from "/images/icons.svg";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const NavMenu = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <svg className={css.navIcon} onClick={openModal}>
        <use href={`${sprite}#icon-Nav`}></use>
      </svg>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>X</button>
        <p>NavMenu</p>
      </Modal>
    </>
  );
};

export default NavMenu;
