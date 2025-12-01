import { useState, useMemo } from "react";
import adventTasks from "../../data/tasks";
import christmasStash from "../../data/stash";
import dayStyles from "../../data/dayStyles";
import sprite from "../../images/svg/tasksSprite.svg";
import decor from "../../images/svg/decor.svg";
import ConfettiExplosion from "confetti-explosion-react";
import s from "./Task.module.scss";
import debounce from "lodash/debounce";

const Task = ({ date }) => {
  const [inputPassword, setInputPassword] = useState("");
  const [correctPassword, setCorrectPassword] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showStash, setShowStash] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const todayTask = adventTasks.find((task) => task.date === +date) || {};
  const todayStash = christmasStash.find((day) => day.date === +date) || {};
  const todayStyle = dayStyles.find((day) => day.date === +date) || {};

  const { task, gift } = todayTask;
  const { stash, password } = todayStash;
  const { color } = todayStyle;

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
            setShowConfetti(true);
            setShowStash(true);
          }, 1000);
        } else {
          setCorrectPassword(false);
        }

        // Trigger shake animation on invalid password
        if (value.trim() !== password) {
          setIsShaking(true);
          setTimeout(() => setIsShaking(false), 500);
        }
      }, 1000),
    [password]
  );

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setInputPassword(value);
    checkPassword(value); // Debounced password check
  };

  return (
    <div className={`${s.Day} ${s[color]}`}>
      <div className={s.TaskWrap}>
        <p className={s.Text}>Любі дівчатка!</p>
        <p className={s.Text}>Ваше завдання на сьогодні:</p>
        <p className={s.Task}>{task}</p>
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
            />
            <button>tfdd</button>
            {/* {!showStash && (
              <button
                className={`${s.Submit} ${
                  correctPassword === true ? s["ShrinkAnimation"] : ""
                }
          ${isShaking ? s["ShakeAnimation"] : ""}`}
                type="button"
              >
                <svg className={`${s.Svg}`}>
                  <use href={decor + `#icon-gift`} />
                </svg>
                <svg className={`${s.Mark}`}>
                  <use href={decor + `#icon-question`} />
                </svg>
              </button>
            )} */}
          </div>
        </div>
      ) : (
        <p className={s.Text}>До завтра!</p>
      )}

      {/* {showConfetti && (
        <ConfettiExplosion
          particleSize={10}
          particleCount={550}
          colors={["#14493e", "#953737", "#ff833e", "#f7c979", "#d1e0c1"]}
        />
      )} */}

      {showStash && <div className={s.Stash}>{stash}</div>}
    </div>
  );
};

export default Task;
