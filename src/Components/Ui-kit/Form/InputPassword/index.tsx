import classNames from "classnames/bind";

import Input from "../Input"
import Label from "../Label"


import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface InputPasswordProps {
  className?: string;
	label: string;
	name: string;
	placeholder: string;
	disabled?: boolean;
	required?: boolean;
  error?: boolean;
}

export default function InputPassword({ 
  className, 
	label, 
	name, 
	placeholder, 
	disabled, 
	required, 
	error
 }: InputPasswordProps) {

  return (
    <div className={cx(css.InputPassword, className)}>
      <Label text={label} />
      <Input 
				type="password" 
				name={name} 
				placeholder={placeholder} 
				disabled={disabled} 
				required={required}
				error={error}
			/>
    </div>
  )
}