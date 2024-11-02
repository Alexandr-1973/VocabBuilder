import React, { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import sprite from "/images/icons.svg";
import css from "./WordsTable.module.css"

// Данные, получаемые с сервера (симуляция)
const dataFromServer = [
  { id: 1, name: "Alice", age: 25, city: "New York", job: "Engineer" },
  { id: 2, name: "Bob", age: 30, city: "Los Angeles", job: "Designer" },
  { id: 3, name: "Charlie", age: 35, city: "Chicago", job: "Teacher" },
  { id: 4, name: "David", age: 40, city: "Houston", job: "Developer" },
  { id: 5, name: "Emma", age: 28, city: "Phoenix", job: "Doctor" },
  { id: 6, name: "Frank", age: 32, city: "Philad", job: "Artist" },
  { id: 7, name: "Grace", age: 45, city: "San", job: "Nurse" },
];

// Инициализация Column Helper
const columnHelper = createColumnHelper();

function MyTable() {
  const data = useMemo(() => dataFromServer, []);
  const a=false;

  const columns = useMemo(
    () => {
      
      const cols=[
      columnHelper.accessor("id", {
        header: (
          <div className={css.wordDiv}>
            <p className={css.p}>Word</p>
            {/* <svg className={css.icon}>
              <use href={`${sprite}#icon-united-kingdom`}></use>
            </svg> */}
          </div>
        ),
      }),
      columnHelper.accessor("name", {
        header: <div className={css.wordDiv}>
        <p className={css.p}>Translation</p>
        {/* <svg className={css.icon}>
          <use href={`${sprite}#icon-united-kingdom`}></use>
        </svg> */}
      </div>,
      }),
     columnHelper.accessor("age", {
      id:"age",
        header: "Category",
        cell: (info) => (info.getValue() > 30 ? info.getValue() : null),
      }),
      columnHelper.accessor("city", {
        header: "Progress",
        // cell: (info) => (info.row.original.age > 30 ? info.getValue() : null),
      }),
      columnHelper.accessor("job", {
        header: "",
        cell:<p>...</p>
      }),
    ]
if (!a){
  return cols.filter(column => column.id !== 'age')

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
    // <div className={css.genTableDiv}>
    <table className={css.table} >
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className={css.titleRow}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className={`${css.cell} ${css.titleRowCell}`}
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
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className={`${css.cell} ${css.bodyCell}`}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    // </div>
  );
}

export default MyTable;

// import DataTable from "react-data-table-component";
// import "./WordsTable.css";
// import sprite from "/images/icons.svg";

// const columns = [
//   {
//     name: (
//       <div className="titleDiv">
//         Word
//         {/* <p className="titleP">Word</p> */}
//         <svg className="icon">
//           <use href={`${sprite}#icon-united-kingdom`}></use>
//         </svg>
//         </div>
//     ),
//     selector: (row) => row.word,
//     cell: (row) => <div className="cellDiv">{row.word} </div>,
//   },
//   {
//     name: (
//       <>
//       {/* Translation */}
//         <p>Translation</p>
//         <svg className="icon">
//           <use href={`${sprite}#icon-ukraine`}></use>
//         </svg>
//       </>
//     ),
//     selector: (row) => row.translation,
//     cell: (row) => <div>{row.translation} </div>,
//   },
//   {
//     name: "Category",
//     selector: (row) => row.category,
//     cell: (row) => <div>{row.category} </div>,
//     // className: 'columnCategory'
//   },
//   {
//     name: "Progress",
//     selector: (row) => row.progress,
//     cell: (row) => <div>{row.progress} </div>,
//   },

//   {
//     name: "",
//     selector: (row) => row.other,
//     cell: (row) => <div>{row.other} </div>,
//   },
// ];

// {
//   /* <CustomCell value={row.other} /> */
// }

// const data = [
//   {
//     id: 1,
//     word: "Beetlejuice",
//     translation: "Привидение",
//     category: "Фильм",
//     progress: 80,
//     other: "...",
//   },
//   {
//     id: 2,
//     word: "Inception",
//     translation: "Начало",
//     category: "Фильм",
//     progress: 85,
//     other: "...",
//   },
//   {
//     id: 3,
//     word: "Ghostbusters",
//     translation: "Охотники за привидениями",
//     category: "Фильм",
//     progress: 90,
//     other: "...",
//   },
//   {
//     id: 4,
//     word: "Beetlejuice",
//     translation: "Привидение",
//     category: "Фильм",
//     progress: 80,
//     other: "...",
//   },
//   {
//     id: 5,
//     word: "Inception",
//     translation: "Начало",
//     category: "Фильм",
//     progress: 85,
//     other: "...",
//   },
//   {
//     id: 6,
//     word: "Ghostbusters",
//     translation: "Охотники за привидениями",
//     category: "Фильм",
//     progress: 90,
//     other: "...",
//   },
//   {
//     id: 7,
//     word: "Ghostbusters",
//     translation: "Охотники за привидениями",
//     category: "Фильм",
//     progress: 90,
//     other: "...",
//   },
// ];

// function WordsTable() {
//   return (
//     <div className="dataTableDiv">
//       <DataTable columns={columns} data={data} />
//     </div>
//   );
// }

// export default WordsTable;
