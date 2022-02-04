import classNames from "classnames/bind";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface InputProps {
  className?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  isRequired?: boolean;
}

export default function Input({ className, type, name, placeholder }: InputProps) {
  return (
    <input 
        className={cx(css.input, className)}
        type={type} 
        name={name}
        placeholder={placeholder} 
    />
  );
}