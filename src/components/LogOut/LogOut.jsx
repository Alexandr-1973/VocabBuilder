import { FaArrowRight } from "react-icons/fa6";
import css from "./LogOut.module.css";

const LogOut = () => {
  return (
    <p className={css.logout}>
      Log out
      <FaArrowRight className={css.arrowRightIcon} />
    </p>
  );
};

export default LogOut;
