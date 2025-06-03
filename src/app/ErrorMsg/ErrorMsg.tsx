import { Error } from "@/app/(products)/_types";
import * as styles from "./ErrorMsg.css";
import React from "react";

const ErrorMsg = ({ msg }: Error) => {
  return <p className={styles.error}>{msg}</p>;
};

export default ErrorMsg;
