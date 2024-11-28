import { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import sprite from "/images/icons.svg";
import css from "./WordsTable.module.css";
import { useLocation } from "react-router-dom";

// Данные, получаемые с сервера (симуляция)
const dataFromServer = [
  {
    word: 1,
    translation: "Alice",
    category: 25,
    progress: "New York",
    edit: "Engineer",
  },
  {
    word: 2,
    translation: "Bob",
    category: 30,
    progress: "Los Angeles",
    edit: "Designer",
  },
  {
    word: 3,
    translation: "Charlie",
    category: 35,
    progress: "Chicago",
    edit: "Teacher",
  },
  {
    word: 4,
    translation: "David",
    category: 40,
    progress: "Houston",
    edit: "Developer",
  },
  {
    word: 5,
    translation: "Emma",
    category: 28,
    progress: "Phoenix",
    edit: "Doctor",
  },
  {
    word: 6,
    translation: "Frank",
    category: 32,
    progress: "Philad",
    edit: "Artist",
  },
  {
    word: 7,
    translation: "Grace",
    category: 45,
    progress: "San",
    edit: "Nurse",
  },
];

// Инициализация Column Helper
const columnHelper = createColumnHelper();

function WordsTable() {
  const data = useMemo(() => dataFromServer, []);

  const location = useLocation();
  console.log(location);

  const a = false;

  const columns = useMemo(
    () => {
      const cols = [
        columnHelper.accessor("word", {
          header: (
            <div className={css.wordDiv}>
              <p className={css.p}>Word</p>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-united-kingdom`}></use>
              </svg>
            </div>
          ),
        }),
        columnHelper.accessor("translation", {
          header: (
            <div className={css.wordDiv}>
              <p className={css.p}>Translation</p>
              <svg className={css.icon}>
                <use href={`${sprite}#icon-ukraine`}></use>
              </svg>
            </div>
          ),
        }),
        columnHelper.accessor("category", {
          // id:"age",
          header: "Category",
          // cell: (info) => (info.getValue() > 30 ? info.getValue() : null),
        }),
        columnHelper.accessor("progress", {
          header: "Progress",
          // cell: (info) => (info.row.original.age > 30 ? info.getValue() : null),
        }),
        columnHelper.accessor("job", {
          header: "",
          cell: <p>...</p>,
        }),
      ];
      if (!a) {
        return cols;
        //  cols.filter(column => column.id !== 'age')
      }
      return cols;
      // if (location.pathname === '/recommend') {
      //   return cols.filter(column => column.id !== 'age'); // Убираем столбец 'age'
      // }

      // return cols;
    },
    [
      // location.pathname
    ]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={css.genTableDiv}>
      <table className={css.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className={css.titleRow}>
              {headerGroup.headers.map((header, index) => (
                <th
                  key={header.id}
                  className={`${css.cell} ${css.titleRowCell} ${
                    index === 2 && location.pathname === "/dictionary"
                      ? css.hiddenProgressDict
                      : location.pathname === "/recommend"
                      ? css.hiddenProgressRecommend
                      : ""
                  }`}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={css.bodyRow}>
              {row.getVisibleCells().map((cell, index) => (
                <td
                  key={cell.id}
                  className={`${css.cell} ${css.bodyCell} ${
                    index === 2 && location.pathname === "/dictionary"
                      ? css.hiddenProgressDict
                      : location.pathname === "/recommend"
                      ? css.hiddenProgressRecommend
                      : ""
                  }`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WordsTable;
