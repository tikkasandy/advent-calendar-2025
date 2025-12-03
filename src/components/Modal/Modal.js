import { useState, useEffect } from "react";
import s from "./Modal.module.scss";
import closeIcon from "../../images/svg/close.svg";

const Modal = ({ isOpen, onClose, message, isError }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShouldRender(false);
      setIsClosing(false);
      onClose();
    }, 2000); // Match animation duration
  };

  if (!shouldRender) return null;

  return (
    <div className={s.ModalOverlay} onClick={handleClose}>
      <div className={`${s.Modal} ${isClosing ? s.ModalClosing : ""}`} onClick={(e) => e.stopPropagation()}>
        <button className={s.CloseButton} onClick={handleClose}>
          <img src={closeIcon} alt="Close" />
        </button>
        <div className={s.ModalContent}>
          <h2 className={`${s.ModalTitle} ${isError ? s.ErrorTitle : ""}`}>
            {isError ? "Пу-пу-пу!" : "Вітаю!"}
          </h2>
          <p className={`${s.ModalText} ${isError ? s.ErrorText : ""}`}>
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
