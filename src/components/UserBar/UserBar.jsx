import css from "./UserBar.module.css";
import { IoPerson } from "react-icons/io5";

const UserBar = ({element}) => {




  return (
    <p className={`${css.name} ${css[`name${element}`]}`}>
      Name
      <IoPerson className={`${css.userIcon} ${css[`userIcon${element}`]}`} />
    </p>
  );
};

export default UserBar;
