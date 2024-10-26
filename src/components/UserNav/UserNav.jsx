import { NavLink } from "react-router-dom";
import css from "./UserNav.module.css";

const UserNav = ({element}) => {
  const pagesArray = ["Dictionary", "Recommend", "Training"];
  return (
    <ul className={`${css.linksUl} ${css[`link${element}`]}`}>
      {pagesArray.map((page, index) => {
        return (
          <li key={index}>
            <NavLink
              className={({ isActive }) =>
                isActive ? css.linkActive : css.link
              }
              to={`/${page.toLowerCase()}`}
            >
              {page}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default UserNav;
