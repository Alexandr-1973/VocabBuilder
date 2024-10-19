import css from "./UserBar.module.css";
import { IoPerson } from "react-icons/io5";

const UserBar = () => {
  return (
    <p className={css.name}>
      {" "}
      Name
      <IoPerson className={css.userIcon} />
    </p>
  );
};

export default UserBar;
