import React from "react";
import classNames from "classnames/bind";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface HomeProps {
  className?: string;
}

export default function Home({ className }: HomeProps) {
  return <div className={cx(css.Home, className)}>Sign In</div>;
}
