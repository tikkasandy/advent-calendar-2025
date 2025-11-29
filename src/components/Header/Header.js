import tree1 from "../../images/img/tree1.png";
import tree2 from "../../images/img/tree2.png";
import s from "./Header.module.scss";

const Header = ({ text }) => {
  return (
    <header className={s.Header}>
      <div className={s.Wrapper}>
        {/* <p className={s.Text}>{text}</p> */}
        <div className={s.TextGrid}>
          <p className={s.Text}>Від:</p>
          <p className={s.Text1}>
            Святого Миколая
            <div className={s.Line1}></div>
          </p>
          {/* <p className={s.Text2}>
            і Басі
            <div className={s.Line2}></div>
          </p> */}
        </div>
      </div>
      <div className={s.Stamps}>
        <div className={s.Stamp1}>
          <img src={tree1} alt="Tree 1" className={s.Tree1} />
        </div>
        <div className={s.Stamp2}>
          <img src={tree2} alt="Tree 2" className={s.Tree2} />
        </div>
      </div>
    </header>
  );
};

export default Header;
