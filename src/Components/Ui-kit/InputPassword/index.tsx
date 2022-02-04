import classNames from "classnames/bind";

import Input from "../Input"
import Label from "../Label"


import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface InputTextProps {
  className?: string;
	label?: string;
	name?: string;
	placeholder?: string;
}

export default function InputText({ className, label, name, placeholder }: InputTextProps) {
  return (
    <div className={cx(css.inputPassword, className)}>
      <Label text={label} />
      <Input type="password" name={name} placeholder={placeholder}/>
    </div>
  )
}