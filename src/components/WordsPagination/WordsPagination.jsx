import { useEffect, useState } from "react";
import css from "./WordsPagination.module.css";
import { getPageNumbersPagination } from "../../utils/getPageNumbersPagination.js";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const WordsPagination = () => {
  const totalItems = 400; // Общее количество элементов
  const itemsPerPage = 7; // Количество элементов на странице

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedRange, setExpandedRange] = useState(null); // Хранит состояние раскрытия для троеточий
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Инициализируем с текущей ширины окна

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setExpandedRange(null); // Сбрасываем раскрытие при изменении текущей страницы
  };

  const getPageNumbers = () => {
    return getPageNumbersPagination(
      currentPage,
      expandedRange,
      totalPages,
      windowWidth
    );
  };

  return (
    <ul className={css.pagination}>
      <li>
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          <MdOutlineKeyboardDoubleArrowLeft
            className={`${css.arrowIcon} ${
              currentPage === totalPages ? css.colourIcon : ""
            }`}
          />
        </button>
      </li>
      <li>
        <button
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <MdOutlineKeyboardArrowLeft className={css.arrowIcon} />
        </button>
      </li>

      {getPageNumbers().map((page, index) =>
        page === "start" ? (
          <li key={index}>
            <button onClick={() => setExpandedRange("start")}>{"..."}</button>
          </li>
        ) : page === "end" ? (
          <li key={index}>
            <button onClick={() => setExpandedRange("end")}>{"..."}</button>
          </li>
        ) : (
          <li key={index}>
            <button
              onClick={() => typeof page === "number" && handlePageChange(page)}
              className={page === currentPage ? css.active : ""}
            >
              {page}
            </button>
          </li>
        )
      )}

      <li>
        <button
          onClick={() =>
            currentPage < totalPages && handlePageChange(currentPage + 1)
          }
          disabled={currentPage === totalPages}
        >
          <MdOutlineKeyboardArrowRight className={css.arrowIcon} />
        </button>
      </li>
      <li>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <MdOutlineKeyboardDoubleArrowRight
            className={`${css.arrowIcon} ${
              currentPage === 1 ? css.colourIcon : ""
            }`}
          />
        </button>
      </li>
    </ul>
  );
};

export default WordsPagination;
