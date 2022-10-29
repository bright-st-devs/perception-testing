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
  {
    button: "",
    colours: ["black","black","black","black","black","black","black","black","black",],
  },
];

const columnHelper = createColumnHelper<Row>();

const Instructions: NextPage = () => {
  const [showTest, setShowTest] = React.useState(false)
  
  function startTest(test_id: number) {
    setShowTest(true);
  }

  return (
    <div className="instructions">
      <button onClick={() => startTest(0)} className="button">Start Test</button>

      { showTest ? <Table /> : null }
    </div>
  );
}

const Table: NextPage = () => {
  const [data, setData] = React.useState(() => [...defaultData]);
  const [rowSelected, setRow] = React.useState(-2);

  function endTest(row: number) {
    setRow(row);
    // TODO: load next test
  }

  const columns = [
      columnHelper.accessor("button", {
        cell: (info) => <button onClick={() => endTest(info.row.index)}>Select</button>,
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
    <div className="table">
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
      <button onClick={() => endTest(-1)} className="button">
        Row Clicked: {rowSelected}
      </button>
    </div>
  );
};

export default Instructions;
