import classNames from "classnames/bind";

import Label from "src/Components/Ui-kit/Form/Label";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface CheckBoxProps {
  className?: string;
  label: string;
  name: string;
  error?: boolean;
  disabled?: boolean;
  id: string;
}

export default function CheckBox({
  className,
  label,
  name,
  error,
  disabled,
  id,
}: CheckBoxProps) {
  return (
    <div className={cx(css.CheckBoxWrapper, className, { disabled })}>
      <input
        className={cx(css.checkBox, { error })}
        type="checkbox"
        {...{ name, id, disabled }}
      />
      <Label className={css.label} text={label} htmlFor={id} />
    </div>
  );
}
