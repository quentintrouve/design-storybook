import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface headerProps {
  className?: string;
}

export default function Header({ className }: headerProps) {
  return (
    <div className={cx(css.Header, className)}>
      <Link to="/">Home</Link>
      <Link to="/sign-up">Signup</Link>
      <Link to="/sign-in">Signin</Link>
    </div>
  );
}
