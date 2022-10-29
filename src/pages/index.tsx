import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import Table from "../@shared/table/Table";

const Instructions: NextPage = () => {
  function begin() {
    // TODO: add entry in database?
    window.location.href='test1';
  }

  return (
    <div className="instructions">
      <h1>Allie&apos;s Science Fair</h1>
      <p>Welcome to my science fair. Details go here.</p>
      <input type="button" onClick={begin} value="Begin" />
    </div>
  );
};

export default Instructions;
