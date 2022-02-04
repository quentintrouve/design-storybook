import classNames from "classnames/bind";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface LabelProps {
  className?: string;
  text?: string;
}

export default function Label({ className, text }: LabelProps) {
  return (
    <label className={cx(css.label, className)}>{text}</label>
  );
}