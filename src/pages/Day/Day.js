// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Header from "../../components/Header";
// import Task from "../../components/Task";
// import s from "./Day.module.scss";
// import variables from "../../styles/_colors.module.scss";
// import adventDays from "../../data/dayStyles";
// import Main from "../../components/Main";

// const Day = () => {
//   const { dayId } = useParams();

//   useEffect(() => {
//     const foundDay = adventDays.find((day) => day.date === +dayId);

//     if (foundDay) {
//       const colorValue = variables[foundDay.color];
//       document.body.style.backgroundColor = colorValue;
//     }
//   }, [dayId]);

//   return (
//     <>
//       <Header text={`${dayId} грудня`} />
//       <Main>
//         <Task date={dayId} />
//       </Main>
//     </>
//   );
// };

// export default Day;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Task from "../../components/Task";
import EarlyDate from "../../components/EarlyDate";
import s from "./Day.module.scss";
import variables from "../../styles/_colors.module.scss";
import adventDays from "../../data/dayStyles";
import Main from "../../components/Main";

const Day = () => {
  const { dayId } = useParams();
  const [isEarlyDate, setIsEarlyDate] = useState(false);

  useEffect(() => {
    const today = new Date();
    const todayDay = today.getDate();
    // console.log(todayDay, +dayId, todayDay< +dayId)

    // Set whether the current day is greater than the dayId
    setIsEarlyDate(todayDay < +dayId);

    const foundDay = adventDays.find((day) => day.date === +dayId);
    if (foundDay) {
      const colorValue = variables[foundDay.color];
      document.body.style.backgroundColor = colorValue;
    }
  }, [dayId]);

  return (
    <>
      <Header text={`${dayId} грудня`} />
      <Main>
        {isEarlyDate ? <EarlyDate dayId={dayId} /> : <Task date={dayId} />}
      </Main>
    </>
  );
};

export default Day;

