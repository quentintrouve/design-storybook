import classNames from "classnames/bind";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface LabelProps {
  className?: string;
  text: string;
  htmlFor?: string;
}

export default function Label({ className, text, htmlFor }: LabelProps) {
  return (
    <label {...{ htmlFor }} className={cx(css.Label, className)}>
      {text}
    </label>
  );
}
