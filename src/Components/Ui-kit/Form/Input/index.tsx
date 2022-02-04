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
  label?: string;
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
  label, 
}: InputProps) {
  return (
    <div className={cx(css.InputWrapper, className)}>
      {label && <label htmlFor={id} className={cx(css.Label)}>{label}</label> }
      <input
        className={cx(css.Input, { error, disabled })}
        {...{ type, name, placeholder, required, disabled, id }}
      />
    </div>

  );
}
