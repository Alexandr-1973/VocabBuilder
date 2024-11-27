import { useState } from "react";
import ReactPaginate from "react-paginate";
import css from "./WordsPagination.module.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const WordsPagination = () => {
  const [currentPage, setCurrentPage] = useState(0); // Состояние текущей страницы
  const pageCount = 100; // Общее количество страниц

  // Обработчик изменения страницы
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    console.log("Выбрана страница:", selected + 1);
  };

  return (
    <div className={css.genDiv}>
      <button
        className={css.paginationButton}
        onClick={() => setCurrentPage(0)}
      >
        <MdOutlineKeyboardDoubleArrowLeft
          className={`${css.arrowIcon} ${
            currentPage === pageCount - 1 ? css.colorIcon : ""
          }`}
        />
      </button>
      <ReactPaginate
        pageCount={pageCount} // Общее количество страниц
        onPageChange={handlePageChange} // Обработчик события изменения страницы
        containerClassName={css.paginationContainer} // Класс для контейнера
        pageClassName={css.paginationButton} // Класс для каждой страницы
        previousClassName={css.paginationButton} // Класс для кнопки "Назад"
        nextClassName={css.paginationButton} // Класс для кнопки "Вперед"
        activeClassName={css.activeButton} // Класс для активной страницы
        disabledClassName="pagination-disabled" // Класс для отключенных кнопок
        breakClassName={`${css.paginationButton} ${css.breakButton}`}
        previousLabel={<MdOutlineKeyboardArrowLeft className={css.arrowIcon} />} // Иконка "Назад"
        nextLabel={<MdOutlineKeyboardArrowRight className={css.arrowIcon} />} // Иконка "Вперед"
        pageRangeDisplayed={3} // Количество видимых страниц
        marginPagesDisplayed={1} // Количество страниц по краям
        forcePage={currentPage} // Принудительное обновление текущей страницы
        renderOnZeroPageCount={null}
      />
      <button
        className={css.paginationButton}
        onClick={() => setCurrentPage(pageCount - 1)}
      >
        <MdOutlineKeyboardDoubleArrowRight
          className={`${css.arrowIcon} ${
            currentPage === 0 ? css.colorIcon : ""
          }`}
        />
      </button>
    </div>
  );
};

export default WordsPagination;
