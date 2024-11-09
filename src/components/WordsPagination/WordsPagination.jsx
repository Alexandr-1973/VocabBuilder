import { useState } from "react";
// import css from "./WordsPagination.module.css"
import "./WordsPagination.css";
import { getPageNumbersPagination } from "../../utils/getPageNumbersPagination.js";

const WordsPagination = () => {
  const totalItems = 400; // Общее количество элементов
  const itemsPerPage = 7; // Количество элементов на странице

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedRange, setExpandedRange] = useState(null); // Хранит состояние раскрытия для троеточий

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setExpandedRange(null); // Сбрасываем раскрытие при изменении текущей страницы
  };

  const getPageNumbers = () => {
    return getPageNumbersPagination(currentPage, expandedRange, totalPages);
  };

 
  return (
    <ul className="pagination">
      <li>
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          ««
        </button>
      </li>
      <li>
        <button
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          «
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
              className={page === currentPage ? "active" : ""}
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
          »
        </button>
      </li>
      <li>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          »»
        </button>
      </li>
    </ul>
  );
};

export default WordsPagination;
// const WordsPagination = () =>
//   // { totalItems, itemsPerPage, onPageChange }
//   {
//     const totalItems = 100; // Общее количество элементов
//     const itemsPerPage = 7; // Количество элементов на странице

//     const totalPages = Math.ceil(totalItems / itemsPerPage);
//     const [currentPage, setCurrentPage] = useState(1);

//     const getPageNumbers = () => {
//       const pageNumbers = [];
//       const range = 2; // Диапазон страниц до и после текущей страницы

//       // Если текущая страница дальше первой страницы + диапазон, добавляем первую страницу и троеточие
//       if (currentPage > range + 2) {
//         pageNumbers.push(1);
//         pageNumbers.push("...");
//       } else if (currentPage > range + 1) {
//         pageNumbers.push(1);
//       }

//       // Добавляем страницы вокруг текущей страницы
//       for (
//         let i = Math.max(1, currentPage - range);
//         i <= Math.min(totalPages, currentPage + range);
//         i++
//       ) {
//         pageNumbers.push(i);
//       }

//       // Если текущая страница ближе к последней странице - диапазон, добавляем троеточие и последнюю страницу
//       if (currentPage < totalPages - range - 1) {
//         pageNumbers.push("...");
//         pageNumbers.push(totalPages);
//       } else if (currentPage < totalPages - range) {
//         pageNumbers.push(totalPages);
//       }

//       return pageNumbers;
//     };

//     return (
//       <ul className="pagination">
//         <li>
//           <button
//             onClick={() => setCurrentPage(1)}
//             disabled={currentPage === 1}
//           >
//             ««
//           </button>
//         </li>
//         <li>
//           <button
//             onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             «
//           </button>
//         </li>

//         {getPageNumbers().map((page, index) => (
//           <li key={index}>
//             <button
//               onClick={() => typeof page === "number" && setCurrentPage(page)}
//               className={page === currentPage ? "active" : ""}
//               disabled={page === "..."}
//             >
//               {page}
//             </button>
//           </li>
//         ))}

//         <li>
//           <button
//             onClick={() =>
//               currentPage < totalPages && setCurrentPage(currentPage + 1)
//             }
//             disabled={currentPage === totalPages}
//           >
//             »
//           </button>
//         </li>
//         <li>
//           <button
//             onClick={() => setCurrentPage(totalPages)}
//             disabled={currentPage === totalPages}
//           >
//             »»
//           </button>
//         </li>
//       </ul>
//     );
//   };

// export default WordsPagination;
