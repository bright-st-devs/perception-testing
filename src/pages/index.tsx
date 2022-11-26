import type { NextPage } from "next";
import React from "react";
import axios from "axios";
import { BeginReqBody } from "./api/begin";
import { getIp } from "../@shared/functions/ip";
import styles from "../styles/Home.module.css";

interface Props {
  ip: string;
  useragent: string;
}

export async function getServerSideProps(context: any) {
  const ip = getIp(context.req);
  const useragent = context.req.headers["user-agent"];
  return {
    props: {
      ip,
      useragent,
    },
  };
}

const Index: NextPage<Props> = (props) => {
  async function begin() {
    const req: BeginReqBody = {
      ip: props.ip,
      useragent: props.useragent,
    };
    var res = await axios.post("/api/begin", req);
    window.location.href='test?id=1';
  }

  return (
    <div className={styles.main}>
      <h1>Allie&apos;s Science Fair</h1>
      <p>Welcome to my science fair. TODO: add details</p>
      <input className={styles.button} type="button" onClick={begin} value="Begin" />
    </div>
  );
};

export default Index;
