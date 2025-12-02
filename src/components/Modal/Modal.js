import s from "./Modal.module.scss";

const Modal = ({ isOpen, onClose, message, isError }) => {
  if (!isOpen) return null;

  return (
    <div className={s.ModalOverlay} onClick={onClose}>
      <div className={s.Modal} onClick={(e) => e.stopPropagation()}>
        <button className={s.CloseButton} onClick={onClose}>
          ×
        </button>
        <div className={s.ModalContent}>
          <h2 className={`${s.ModalTitle} ${isError ? s.ErrorTitle : ""}`}>
            {isError ? "Помилка!" : "Вітаємо!"}
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
