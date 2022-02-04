import classNames from "classnames/bind";

import Input, { InputProps } from "../Input";
import Label from "../Label";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface InputTextProps extends InputProps {
  className?: string;
  label: string;
}

export default function InputText({
  className,
  label,
  ...rest
}: InputTextProps) {
  return (
    <div className={cx(css.InputText, className)}>
      <Label text={label} htmlFor={rest?.id} />
      <Input type="text" {...rest} />
    </div>
  );
}
