import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Row = {
  button: string;
  colours: string[];
};

const defaultData: Row[] = [
  {
    button: "",
    colours: ["black","black","black","black","black","black","black","black","black",],
  },
  {
    button: "",
    colours: ["black","black","black","black","black","black","red","black","black",],
  },
];

const columnHelper = createColumnHelper<Row>();

const Home: NextPage = () => {
  const [data, setData] = React.useState(() => [...defaultData]);
  const [rowSelected, setRow] = React.useState(-2);
  const rerender = React.useReducer(() => ({}), {})[1];

  function handleClick(row: any) {
    setRow(row);
  }

  const columns = [
      columnHelper.accessor("button", {
        cell: (info) => <button onClick={() => handleClick(info.row.id)}>Select</button>,
      }),
      columnHelper.accessor("colours", {
        cell: (info) => {
          var content = "";
          for (let i = 0; i < info.getValue().length; i++) {
            var colour = info.getValue()[i]
            content += '<span style="color:' + colour + '">x </span>'
          }
          return <div dangerouslySetInnerHTML={{__html: content}} />
        }
      }),
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
