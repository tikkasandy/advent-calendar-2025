import dayStyles from "../../data/dayStyles";
import decor from "../../images/svg/decor.svg";
import s from "./EarlyDate.module.scss";

const EarlyDate = ({dayId}) => {
    const todayStyle = dayStyles.find((day) => day.date === +dayId) || {};
    const { color } = todayStyle;
    console.log(dayId)

  return (
    <div className={`${s.Day} ${s[color]}`}>
      <svg className={`${s.Logo}`}>
        <use href={decor + `#icon-santa`} />
      </svg>
      <p className={s.Ho}>Хо-хо-хо!</p>
      <p className={s.Text}>Не поспішай!</p>
      <p className={s.Text}>Заходь пізніше!</p>
    </div>
  );
};

export default EarlyDate;
