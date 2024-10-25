import Modal from "react-modal";
import css from "./NavMenu.module.css";
import sprite from "/images/icons.svg";
import { useState } from "react";
import UserBar from "../UserBar/UserBar";
import UserNav from "../UserNav/UserNav";
import LogOut from "../LogOut/LogOut";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
    
//     bottom: "auto",
//     marginRight: "-50%",
    
//     transform: "translate(-50%, -50%)",
//   },
// };

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
        // style={customStyles}
        // style={css.modal}
        contentLabel="Example Modal"
        className={css.modal}
      >
        <div className={css.userBarDiv}>
        <UserBar/>
        <button onClick={closeModal}>X</button>
        </div>
        <UserNav/>
        <LogOut element="modal"/>
        <picture className={css.img}>
          <source
            srcSet="/images/illustration-modal-mob-1x.jpg 1x, /images/illustration-modal-mob-2x.jpg 2x"
            media="(min-width: 320px)"
          />
          <source
            srcSet="/images/illustration-modal-tablet-1x.jpg 1x, /images/illustration-modal-tablet-2x.jpg 2x"
            media="(mim-width: 768px)"
          />
          <img
            src="/images/illustration-modal-mob-1x.jpg"
            alt="Boy and girl read books"
          />
        </picture>
      </Modal>
    </>
  );
};

export default NavMenu;
