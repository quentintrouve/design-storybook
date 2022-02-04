import classNames from "classnames/bind";

import Spinner from "src/Components/Ui-kit/Icons/Spinner";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface SquaredCtaProps {
  className?: string;
  variant: "primary" | "secondary";
  text: string;
  onClick?: () => any;
  disabled?: boolean;
  loading?: boolean;
  error?: boolean;
}

export default function SquaredCta({
  className,
  variant,
  text,
  onClick,
  disabled,
  loading,
  error,
}: SquaredCtaProps) {
  return (
    <button
      className={cx(css.SquaredCta, className, variant, { error, loading })}
      {...{ onClick, disabled }}
    >
      {loading && (
        <Spinner
          color={variant === "primary" ? "white" : "blue"}
          className={css.spinner}
        />
      )}
      <span className={css.text}>{text}</span>
    </button>
  );
}

SquaredCta.defaultProps = {
  type: "primary",
};
