// import dayStyles from "../../data/dayStyles";
import postInWay from "../../images/img/post-in-way.png";
import s from "./EarlyDate.module.scss";

const EarlyDate = ({dayId}) => {
    // const todayStyle = dayStyles.find((day) => day.date === +dayId) || {};
    // console.log(dayId)

  return (
    <div className={s.Day}>
      <img src={postInWay} alt="Post in way" className={s.Logo} />
      <p className={s.Ho}>Хо-хо-хо!</p>
      <p className={s.Text}>Не поспішайте!</p>
      <p className={s.Text}>Лист ще в дорозі!</p>
    </div>
  );
};

export default EarlyDate;
