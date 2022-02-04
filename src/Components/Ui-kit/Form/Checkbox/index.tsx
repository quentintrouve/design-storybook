import classNames from "classnames/bind";

import Label from "src/Components/Ui-kit/Form/Label";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface CheckBoxProps {
  className?: string;
  label: string;
  name: string;
  id: string;
}

export default function CheckBox({
  className,
  label,
  name,
  id,
}: CheckBoxProps) {
  return (
    <div className={cx(css.CheckBoxWrapper, className)}>
      <input className={css.checkBox} type="checkbox" {...{ name, id }} />
      <Label className={css.label} text={label} htmlFor={id} />
    </div>
  );
}
