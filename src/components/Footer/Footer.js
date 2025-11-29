import stamp from "../../images/img/post.png";
import s from "./Footer.module.scss";

const Footer = ({ text }) => {
  return (
    <footer className={s.Footer}>
      <div className={s.FirstLine}>
        <div className={s.Wrapper}>
          <p className={s.Text}>Кому:</p>
          <p className={s.Text1}>
            Маші і Басі
            <div className={s.Line1}></div>
          </p>
        </div>
      </div>
      <div className={s.SecondLine}>
        <p className={s.Day}>{text}</p>
      </div>
      <div className={s.Stamp}>
        <img src={stamp} alt="Tree 1" className={s.Tree} />
      </div>
    </footer>
  );
};

export default Footer;
