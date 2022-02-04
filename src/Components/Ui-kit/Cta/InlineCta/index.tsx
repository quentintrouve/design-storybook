import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import Spinner from "src/Components/Ui-kit/Icons/Spinner";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface InlineCtaProps {
  className?: string;
  text: string;
  onClick?: () => any;
  disabled?: boolean;
  loading?: boolean;
  error?: boolean;
  routerLink?: boolean;
  to?: string;
}

export default function InlineCta({
  className,
  text,
  onClick,
  disabled,
  loading,
  error,
  routerLink,
  to,
}: InlineCtaProps) {
  const CustomTag = routerLink ? Link : "button";

  return (
    <CustomTag
      className={cx(css.InlineCta, className, { error })}
      {...{ onClick, disabled, to }}
    >
      {loading && <Spinner color="blue" className={css.spinner} />}
      <span>{text}</span>
    </CustomTag>
  );
}
