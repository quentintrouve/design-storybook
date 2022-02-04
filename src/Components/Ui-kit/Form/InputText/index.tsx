import classNames from "classnames/bind";

import Input from "../Input"
import Label from "../Label"


import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface InputTextProps {
  className?: string;
	label: string;
	name: string;
	placeholder: string;
	disabled?: boolean;
	required?: boolean;
  error?: boolean;
}

export default function InputText({ 
	className, 
	label, 
	name, 
	placeholder, 
	disabled, 
	required, 
	error }: InputTextProps) {

  return (
    <div className={cx(css.InputText, className)}>
      <Label text={label} />
      <Input 
				type="text" 
				name={name} 
				placeholder={placeholder} 
				disabled={disabled} 
				required={required}
				error={error}
			/>
    </div>
  )
}