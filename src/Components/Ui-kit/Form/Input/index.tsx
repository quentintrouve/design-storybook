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
}

export default function Input({ 
  className, 
  type, 
  name, 
  placeholder, 
  disabled, 
  required, 
  error}: InputProps) {

  return (
    <input 
        className={cx(css.Input, className, { error, disabled })}
        type={type} 
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        required= {required}
    />
  );
}