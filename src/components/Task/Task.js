import { useState } from "react";
import adventTasks from "../../data/tasks";
import Modal from "../Modal/Modal";
import s from "./Task.module.scss";

const Task = ({ date }) => {
  const [inputPassword, setInputPassword] = useState("");
  const [correctPassword, setCorrectPassword] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const todayTask = adventTasks.find((task) => task.date === +date) || {};

  const { task, gift, stash, password, hint } = todayTask;

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setInputPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Blur the input to dismiss the mobile keyboard
    if (e.target && e.target.querySelector) {
      const input = e.target.querySelector('input');
      if (input) {
        input.blur();
      }
    }

    if (inputPassword.trim() === "") {
      setCorrectPassword(false);
      setModalMessage("Будь ласка, введіть пароль!");
      setShowModal(true);
      return;
    }

    if (inputPassword.trim() === password) {
      setCorrectPassword(true);
      setModalMessage(stash);
      setShowModal(true);
    } else {
      setCorrectPassword(false);
      setModalMessage("Неправильне кодове слово! Спробуйте ще раз.");
      setShowModal(true);
    }
  };

  return (
    <div className={s.Day}>
      <div className={s.TaskWrap}>
        <p className={s.Text}>Любі дівчатка!</p>
        <p className={s.Text}>Ваше завдання на сьогодні:</p>
        <p className={`${s.Task} ${task?.length > 150 ? s.VeryLongTask : task?.length > 50 ? s.LongTask : ""}`}>
          {task}
        </p>
        {gift && (
          <p className={s.Text}>
            Після виконання завдання з'ясуйте кодове слово у батьків. Надішліть
            його мені — і ви дізнаєтесь місце схованки подарунків.
          </p>
        )}
      </div>

      {gift ? (
        <div className={s.Password}>
          <p className={s.Hint}>Чекаю на вашу відповідь!</p>
          <form onSubmit={handleSubmit} className={`${s.InputWrapper}`}>
            <input
              type="text"
              value={inputPassword}
              onChange={handlePasswordChange}
              className={s.Input}
              onFocus={(e) =>
                setTimeout(
                  () =>
                    e.target.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    }),
                  300
                )
              }
            />
            <button type="submit" className={s.SubmitButton}>
              <div className={`${s.Arrow} ${s.RedArrow}`}></div>
              <div className={`${s.Arrow} ${s.BlueArrow}`}></div>
              <div className={`${s.Arrow} ${s.RedArrow}`}></div>
              <div className={`${s.Arrow} ${s.BlueArrow}`}></div>
            </button>
          </form>
        </div>
      ) : (
        <p className={s.Text}>До завтра!</p>
      )}

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        message={modalMessage}
        isError={correctPassword === false}
        hint={hint}
        date={date}
      />
    </div>
  );
};

export default Task;
