import { Link } from "react-router-dom";
import css from "./Header.module.css";
import sprite from "/images/sprite.svg";

const Header = () => {
  return (
    <nav className={css.nav}>
      <Link className={css.logoLink}>
        <svg className={css.logo}>
          <use href={`${sprite}#icon-Craftwork`}></use>
        </svg>
        VocabBuilder
      </Link>
    </nav>
  );
};

export default Header;
