import { FaArrowRight } from "react-icons/fa6";
import css from "./LogOut.module.css";

const LogOut = ({element}) => {
  return (
    <p className={`${css.logout} ${css[`logout${element}`]}`}>
      Log out
      <FaArrowRight className={css.arrowRightIcon} />
    </p>
  );
};

export default LogOut;
