import React from "react";
import classNames from "classnames/bind";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface BaseComponentProps {
  className?: string;
}

export default function BaseComponent({ className }: BaseComponentProps) {
  return (
    <div className={cx(css.baseComponentWrapper, className)}>
      I, i'm a base component
    </div>
  );
}
