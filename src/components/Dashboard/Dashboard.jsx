import css from "./Dashboard.module.css";
import Filters from "../Filters/Filters";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GoPlus } from "react-icons/go";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const pageValue = useLocation();

  return (
    <div className={css.genDiv}>
      <Filters />
      <ul className={css.trainUl}>
        <li className={css.studyLi}>
          To study:<p className={css.studyP}>20</p>
        </li>

        {pageValue.pathname !== "/recommend" && (
          <li className={css.buttonLi}>
            <button className={css.wordButton}>
              Add word
              <GoPlus className={css.iconPlus} />
            </button>
          </li>
        )}

        <li>
          <Link to="/training" className={css.trainLink}>
            Train oneself
            <HiOutlineArrowNarrowRight className={css.iconArrow} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
