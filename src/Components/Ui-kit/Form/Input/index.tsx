import classNames from "classnames/bind";
import Label from "../Label";

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
  onChange?: (e:any) => any;
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
  onChange
}: InputProps) {
  return (
    <div className={cx(css.InputWrapper, className)}>
      {label && <Label text={label} htmlFor={id} /> }
      <input
        className={cx(css.Input, { error, disabled })}
        {...{ type, name, placeholder, required, disabled, id, onChange }}
      />
    </div>

  );
}
