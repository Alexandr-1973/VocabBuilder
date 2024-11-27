export const getPageNumbersPagination = (
  currentPage,
  expandedRange,
  totalPages,
  windowWidth
) => {
  const pageNumbers = [];

  const range = windowWidth <= 767 ? 1 : 2; // Количество страниц до и после текущей страницы в среднем состоянии

  // Добавляем первую страницу
  pageNumbers.push(1);

  // Проверяем, нужно ли показывать троеточие перед текущим диапазоном
  if (currentPage > range + 3 && expandedRange !== "start") {
    pageNumbers.push("start");
  } else {
    // Добавляем страницы между первой и текущей позицией, если раскрыто
    for (let i = 2; i < currentPage - range; i++) {
      pageNumbers.push(i);
    }
  }

  // Добавляем центральные страницы вокруг текущей страницы
  const startPage = Math.max(2, currentPage - range);
  const endPage = Math.min(totalPages - 1, currentPage + range);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // Проверяем, нужно ли показывать троеточие после текущего диапазона
  if (currentPage < totalPages - range - 2 && expandedRange !== "end") {
    pageNumbers.push("end");
  } else {
    // Добавляем страницы между текущей позицией и последней страницей, если раскрыто
    for (let i = currentPage + range + 1; i < totalPages; i++) {
      pageNumbers.push(i);
    }
  }

  // Добавляем последнюю страницу
  pageNumbers.push(totalPages);

  return pageNumbers;
};
