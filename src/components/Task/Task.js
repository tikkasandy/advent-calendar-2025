import { useState, useMemo } from "react";
import adventTasks from "../../data/tasks";
import christmasStash from "../../data/stash";
import Modal from "../Modal/Modal";
import s from "./Task.module.scss";
import debounce from "lodash/debounce";

const Task = ({ date }) => {
  const [inputPassword, setInputPassword] = useState("");
  const [correctPassword, setCorrectPassword] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const todayTask = adventTasks.find((task) => task.date === +date) || {};
  const todayStash = christmasStash.find((day) => day.date === +date) || {};
  // const todayStyle = dayStyles.find((day) => day.date === +date) || {};

  const { task, gift } = todayTask;
  const { stash, password } = todayStash;
  // const { color } = todayStyle;

  // Debounced Password Check
  const checkPassword = useMemo(
    () =>
      debounce((value) => {
        if (value.trim() === "") {
          setCorrectPassword(null);
          return;
        }
        if (value.trim() === password) {
          setCorrectPassword(true);
          setTimeout(() => {
            setModalMessage(stash);
            setShowModal(true);
          }, 1000);
        } else {
          setCorrectPassword(false);
          setModalMessage("Неправильний пароль! Спробуйте ще раз.");
          setShowModal(true);
        }
      }, 1000),
    [password, stash]
  );

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setInputPassword(value);
    checkPassword(value); // Debounced password check
  };

  return (
    <div className={s.Day}>
      <div className={s.TaskWrap}>
        <p className={s.Text}>Любі дівчатка!</p>
        <p className={s.Text}>Ваше завдання на сьогодні:</p>
        <p className={`${s.Task} ${task?.length > 50 ? s.LongTask : ""}`}>{task}</p>
        {gift && (
          <p className={s.Text}>
            Виконавши завдання, запитайте кодове слово у батьків. Пришліть його
            мені і я скажу де заховані подарунки.
          </p>
        )}
      </div>

      {gift ? (
        <div className={s.Password}>
          <p className={s.Hint}>Чекаю на вашу відповідь!</p>
          <div className={`${s.InputWrapper}`}>
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
            <button className={s.SubmitButton}>
              <div className={`${s.Arrow} ${s.RedArrow}`}></div>
              <div className={`${s.Arrow} ${s.BlueArrow}`}></div>
              <div className={`${s.Arrow} ${s.RedArrow}`}></div>
              <div className={`${s.Arrow} ${s.BlueArrow}`}></div>
            </button>
          </div>
        </div>
      ) : (
        <p className={s.Text}>До завтра!</p>
      )}

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        message={modalMessage}
        isError={correctPassword === false}
      />
    </div>
  );
};

export default Task;
