import classNames from "classnames/bind";

import Input, { InputProps } from "../Input";
import Label from "../Label";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface InputPasswordProps extends InputProps {
  className?: string;
  label: string;
}

export default function InputPassword({
  className,
  label,
  ...rest
}: InputPasswordProps) {
  return (
    <div className={cx(css.InputPassword, className)}>
      <Label text={label} htmlFor={rest?.id} />
      <Input type="password" {...rest} />
    </div>
  );
}
