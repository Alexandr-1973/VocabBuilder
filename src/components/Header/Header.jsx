import { Link, NavLink } from "react-router-dom";
import css from "./Header.module.css";
import sprite from "/images/icons.svg";
import { IoPerson } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { CgMenuRightAlt } from "react-icons/cg";

const Header = () => {
  const pagesArray = ["Dictionary", "Recommend", "Training"];

  return (
    <nav className={css.nav}>
      <Link to="/" className={css.logoLink}>
        <svg className={css.logo}>
          <use href={`${sprite}#icon-Craftwork`}></use>
        </svg>
        VocabBuilder
      </Link>
      <ul className={css.linksUl}>
        {pagesArray.map((page, index) => {
          return (
            <li key={index} className={css.link}>
              <NavLink
                className={({ isActive }) => (isActive ? css.linkActive : css.link)}
                to={`/${page.toLowerCase()}`}
              >
                {page}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul className={css.logoutUl}>
        <li className={css.name}>
          Name
          <IoPerson className={css.userIcon} />
          {/* <svg >
          <use href={`${sprite}#icon-Vector-1`}></use>
        </svg> */}
        </li>

        <li className={css.logout}>
          Log out
          <FaArrowRight className={css.arrowRightIcon} />
          {/* <svg className={css.arrowRightIcon}>
          <use href={`${sprite}#icon-arrow-right`}></use>
        </svg> */}
          {/* <svg className={css.arrowRightIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.93335 8H13.7333" stroke="#121417" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M9.59998 3.33337L14.2666 8.00004L9.59998 12.6667" stroke="#121417" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
</svg> */}
        </li>
        <li className={css.navIconLi}>
        {/* <CgMenuRightAlt className={css.navIcon}/> */}

        {/* <svg class="icon icon-Nav"><use xlink:href="#icon-Nav"></use></svg> */}
          <svg className={css.navIcon}><use href={`${sprite}#icon-Nav`}></use></svg>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
