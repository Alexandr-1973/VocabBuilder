import { Link } from "react-router-dom";
import css from "./Header.module.css";
import sprite from "/images/icons.svg";
import UserNav from "../UserNav/UserNav";
import NavMenu from "../NavMenu/NavMenu";
import LogOut from "../LogOut/LogOut";
import UserBar from "../UserBar/UserBar";

const Header = () => {
  return (
    <nav className={css.nav}>
      <Link to="/" className={css.logoLink}>
        <svg className={css.logo}>
          <use href={`${sprite}#icon-Craftwork`}></use>
        </svg>
        VocabBuilder
      </Link>
      <div className={css.forHiddenUserNav}>
        <UserNav />
      </div>

      <ul className={css.logoutUl}>
        <li>
          <UserBar />
        </li>
        <li>
          <LogOut element="header"/>
        </li>
        <li className={css.navIconLi}>
          <NavMenu />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
