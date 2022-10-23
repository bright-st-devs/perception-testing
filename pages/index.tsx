import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import React from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Person = {
  button: any;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    button: 1,
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    button: 2,
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    button: 3,
    firstName: "joe",
    lastName: "dirte",
    age: 44,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

const columnHelper = createColumnHelper<Person>();

const Home: NextPage = () => {
  const [data, setData] = React.useState(() => [...defaultData]);
  const [rowSelected, setRow] = React.useState(-2);
  const rerender = React.useReducer(() => ({}), {})[1];

  function handleClick(row: any) {
    setRow(row)
  }

  const columns = [
    columnHelper.accessor("button", {
      cell: (info) => (
        <button onClick={() => handleClick(info.row.id)}>Select</button>
      ),
    }),
    columnHelper.accessor("firstName", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: "lastName",
      cell: (info) => <i>{info.getValue()}</i>,
    }),
    columnHelper.accessor("age", {
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("visits", {}),
    columnHelper.accessor("status", {}),
    columnHelper.accessor("progress", {}),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });


  return (
    // <div className={styles.container}>
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
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
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => handleClick(-1)} className="border p-2">
        Row Clicked: {rowSelected}
      </button>
    </div>
  );
};

export default Home;
