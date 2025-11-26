// // // import { useState } from "react";
// // // import { IoCheckmark } from "react-icons/io5";
// // // import adventTasks from "../../data/tasks";
// // // import christmasStash from "../../data/stash";
// // // import dayStyles from "../../data/dayStyles";
// // // import sprite from "../../images/svg/tasksSprite.svg";
// // // import decor from "../../images/svg/decor.svg";
// // // import Confetti from "react-confetti-boom";
// // // import s from "./Task.module.scss";

// // // const Task = ({ date }) => {
// // //   const [inputPassword, setInputPassword] = useState("");
// // //   const [correctPassword, setCorrectPassword] = useState(null);

// // //   const todayTask = adventTasks.find((task) => task.date === +date) || {};
// // //   const todayStash = christmasStash.find((day) => day.date === +date) || {};
// // //   const todayStyle = dayStyles.find((day) => day.date === +date) || {};

// // //   console.log(dayStyles[0]);

// // //   const { task, logo } = todayTask;
// // //   const { stash, password } = todayStash;
// // //   const { color } = todayStyle;

// // //   const handlePasswordChange = (e) => {
// // //     setInputPassword(e.target.value);
// // //   };

// // //   const handlePasswordSubmit = (e) => {
// // //     e.preventDefault();
// // //     setCorrectPassword(inputPassword.trim() === password);
// // //   };

// // //   return (
// // //     <div className={`${s.Day} ${s[color]}`}>
// // //       <div>
// // //         <div className={s.TaskWrap}>
// // //           <p className={s.Task}>{task}</p>
// // //         </div>

// // //         <div className={s.LogoWrap}>
// // //           <svg className={`${s.Logo}`}>
// // //             <use href={sprite + `#icon-${logo}`} />
// // //           </svg>
// // //         </div>
// // //       </div>

// // //       <div className={s.Password}>
// // //         <p className={s.Hint}>Щоб знайти подарунок, введи таємний код!</p>
// // //         <form onSubmit={handlePasswordSubmit} className={s.Form}>
// // //           <div className={s.InputWrapper}>
// // //             <input
// // //               type="text"
// // //               value={inputPassword}
// // //               onChange={handlePasswordChange}
// // //               className={s.Input}
// // //             />
// // //             <button className={s.Submit} type="submit">
// // //               <svg className={`${s.Svg}`}>
// // //                 <use href={decor + `#icon-gift`} />
// // //               </svg>
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </div>

// // //       {correctPassword === true ? (
// // //         <div className={s.Stash}>{stash}</div>
// // //       ) : correctPassword === false ? (
// // //         <div className={s.ErrorMessage}>You are a cheater!</div>
// // //       ) : null}
// // //     </div>
// // //   );
// // // };

// // // export default Task;

// // import { useState } from "react";
// // import adventTasks from "../../data/tasks";
// // import christmasStash from "../../data/stash";
// // import dayStyles from "../../data/dayStyles";
// // import sprite from "../../images/svg/tasksSprite.svg";
// // import decor from "../../images/svg/decor.svg";
// // import Confetti from "react-confetti-boom";
// // import ConfettiExplosion from "confetti-explosion-react";
// // import s from "./Task.module.scss";

// // const Task = ({ date }) => {
// //   const [inputPassword, setInputPassword] = useState("");
// //   const [correctPassword, setCorrectPassword] = useState(null);
// //   const [showConfetti, setShowConfetti] = useState(false);
// //   const [showStash, setShowStash] = useState(false);

// //   const todayTask = adventTasks.find((task) => task.date === +date) || {};
// //   const todayStash = christmasStash.find((day) => day.date === +date) || {};
// //   const todayStyle = dayStyles.find((day) => day.date === +date) || {};

// //   const { task, logo } = todayTask;
// //   const { stash, password } = todayStash;
// //   const { color } = todayStyle;

// //   const handlePasswordChange = (e) => {
// //     setInputPassword(e.target.value);
// //   };

// //   const handlePasswordSubmit = (e) => {
// //     e.preventDefault();
// //     if (inputPassword.trim() === password) {
// //       setCorrectPassword(true);
// //       setTimeout(() => {
// //         setShowConfetti(true);
// //         setShowStash(true);
// //       }, 1000); // Confetti after button animation
// //     } else {
// //       setCorrectPassword(false);
// //     }
// //   };

// //   return (
// //     <div className={`${s.Day} ${s[color]}`}>
// //       <div>
// //         <div className={s.TaskWrap}>
// //           <p className={s.Task}>{task}</p>
// //         </div>

// //         <div className={s.LogoWrap}>
// //           <svg className={`${s.Logo}`}>
// //             <use href={sprite + `#icon-${logo}`} />
// //           </svg>
// //         </div>
// //       </div>

// //       <div className={s.Password}>
// //         <p className={s.Hint}>Щоб знайти подарунок, введи таємний код!</p>
// //         <form onSubmit={handlePasswordSubmit} className={s.Form}>
// //           <div className={s.InputWrapper}>
// //             <input
// //               type="text"
// //               value={inputPassword}
// //               onChange={handlePasswordChange}
// //               className={s.Input}
// //             />
// //             {!showStash && (
// //               <button
// //                 className={`${s.Submit} ${
// //                   correctPassword === true ? s["shrink-animation"] : ""
// //                 }`}
// //                 type="submit"
// //               >
// //                 <svg className={`${s.Svg}`}>
// //                   <use href={decor + `#icon-gift`} />
// //                 </svg>
// //                 <p className={s.Mark}>?</p>
// //               </button>
// //             )}
// //           </div>
// //         </form>
// //       </div>

// //       {showConfetti && (
// //         <ConfettiExplosion
// //           particleSize={10}
// //           particleCount={550}
// //           colors={["#14493e", "#953737", "#ff833e", "#f7c979", "#d1e0c1"]}
// //         />
// //       )}

// //       {showStash && <div className={s.Stash}>{stash}</div>}

// //       {correctPassword === false && (
// //         <div className={s.ErrorMessage}>You are a cheater!</div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Task;

// import { useState, useEffect } from "react";
// import adventTasks from "../../data/tasks";
// import christmasStash from "../../data/stash";
// import dayStyles from "../../data/dayStyles";
// import sprite from "../../images/svg/tasksSprite.svg";
// import decor from "../../images/svg/decor.svg";
// import ConfettiExplosion from "confetti-explosion-react";
// import s from "./Task.module.scss";

// const Task = ({ date }) => {
//   const [inputPassword, setInputPassword] = useState("");
//   const [correctPassword, setCorrectPassword] = useState(null);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [showStash, setShowStash] = useState(false);

//   const todayTask = adventTasks.find((task) => task.date === +date) || {};
//   const todayStash = christmasStash.find((day) => day.date === +date) || {};
//   const todayStyle = dayStyles.find((day) => day.date === +date) || {};

//   const { task, logo } = todayTask;
//   const { stash, password } = todayStash;
//   const { color } = todayStyle;

//   useEffect(() => {
//     if (inputPassword.trim() === "") {
//       setCorrectPassword(null);
//       return;
//     }

//     const timer = setTimeout(() => {
//       if (inputPassword.trim() === password) {
//         setCorrectPassword(true);
//         setTimeout(() => {
//           setShowConfetti(true);
//           setShowStash(true);
//         }, 1000);
//       } else {
//         setCorrectPassword(false);
//       }
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [inputPassword, password]);

//   const handlePasswordChange = (e) => {
//     setInputPassword(e.target.value);
//   };

//   return (
//     <div className={`${s.Day} ${s[color]}`}>
//       <div>
//         <div className={s.TaskWrap}>
//           <p className={s.Task}>{task}</p>
//         </div>

//         <div className={s.LogoWrap}>
//           <svg className={`${s.Logo}`}>
//             <use href={sprite + `#icon-${logo}`} />
//           </svg>
//         </div>
//       </div>

//       <div className={s.Password}>
//         <p className={s.Hint}>Щоб знайти подарунок, введи таємний код!</p>
//         <div className={s.InputWrapper}>
//           <input
//             type="text"
//             value={inputPassword}
//             onChange={handlePasswordChange}
//             className={s.Input}
//           />
//         </div>
//       </div>

//       {!showStash && (
//         <button
//           className={`${s.Submit} ${
//             correctPassword === true ? s["ShrinkAnimation"] : s["ShakeAnimation"]
//           }`}
//           type="submit"
//         >
//           <svg className={`${s.Svg}`}>
//             <use href={decor + `#icon-gift`} />
//           </svg>
//           <svg className={`${s.Mark}`}>
//             <use href={decor + `#icon-question`} />
//           </svg>
//         </button>
//       )}

//       {showConfetti && (
//         <ConfettiExplosion
//           particleSize={10}
//           particleCount={550}
//           colors={["#14493e", "#953737", "#ff833e", "#f7c979", "#d1e0c1"]}
//         />
//       )}

//       {showStash && <div className={s.Stash}>{stash}</div>}

//       {/* {correctPassword === false && (
//         <div className={s.ErrorMessage}>You are a cheater!</div>
//       )} */}
//     </div>
//   );
// };

// export default Task;

//

import { useState, useEffect, useMemo } from "react";
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

  const { task, logo } = todayTask;
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
      <div>
        <div className={s.TaskWrap}>
          <p className={s.Task}>{task}</p>
        </div>

        <div className={s.LogoWrap}>
          <svg className={`${s.Logo}`}>
            <use href={sprite + `#icon-${logo}`} />
          </svg>
        </div>
      </div>

      <div className={s.Password}>
        <p className={s.Hint}>Щоб знайти подарунок, введи таємний код!</p>
        <div className={`${s.InputWrapper}`}>
          <input
            type="text"
            value={inputPassword}
            onChange={handlePasswordChange}
            className={s.Input}
          />
        </div>
      </div>

      {!showStash && (
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
      )}

      {showConfetti && (
        <ConfettiExplosion
          particleSize={10}
          particleCount={550}
          colors={["#14493e", "#953737", "#ff833e", "#f7c979", "#d1e0c1"]}
        />
      )}

      {showStash && <div className={s.Stash}>{stash}</div>}
    </div>
  );
};

export default Task;
