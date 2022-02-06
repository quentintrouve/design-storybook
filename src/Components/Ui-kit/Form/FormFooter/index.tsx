import classNames from "classnames/bind";

import Label from "../Label";
import Cta from "src/Components/Ui-kit/Cta";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface FormFooterProps {
  className?: string;
  label: string;
  textButton: string;
  to: string;
}

export default function FormFooter({
  className,
  label,
  textButton,
  to,
}: FormFooterProps) {
  return (
    <div className={cx(css.FormFooter, className)}>
      <Label text={label} />
      <Cta
        className={css.inlineButton}
        variant="primary"
        text={textButton}
        routerLink={true}
        to={to}
      />
    </div>
  );
}
