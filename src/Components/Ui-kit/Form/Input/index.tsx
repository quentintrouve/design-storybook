import classNames from "classnames/bind";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface InputProps {
  className?: string;
  type: string;
  name: string;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  id?: string;
}

export default function Input({
  className,
  type,
  name,
  placeholder,
  disabled,
  required,
  error,
  id,
}: InputProps) {
  return (
    <input
      className={cx(css.Input, className, { error, disabled })}
      {...{ type, name, placeholder, required, disabled, id }}
    />
  );
}
