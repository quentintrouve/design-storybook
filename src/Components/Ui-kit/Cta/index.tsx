import classNames from "classnames/bind";

import { Link } from "react-router-dom";
import Spinner from "src/Components/Ui-kit/Icons/Spinner";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface CtaProps {
  className?: string;
  variant: "primary" | "secondary" | "inline";
  text: string;
  onClick?: () => any;
  disabled?: boolean;
  loading?: boolean;
  error?: boolean;
  routerLink?: boolean;
  to?: string;
}

export default function Cta({
  className,
  variant,
  text,
  onClick,
  disabled,
  loading,
  error,
  routerLink,
  to,
}: CtaProps) {
  const CustomTag = routerLink ? Link : "button";

  return (
    <CustomTag
      className={cx(css.Cta, className, variant, { error, loading })}
      {...{ onClick, disabled, to }}
    >
      {loading && (
        <Spinner
          color={
            variant === "secondary" || variant === "inline" ? "blue" : "white"
          }
          className={css.spinner}
        />
      )}
      <span className={css.text}>{text}</span>
    </CustomTag>
  );
}

Cta.defaultProps = {
  type: "primary",
};
