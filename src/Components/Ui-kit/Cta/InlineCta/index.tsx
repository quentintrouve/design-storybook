import classNames from "classnames/bind";

import Spinner from "src/Components/Ui-kit/Icon/Spinner";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface InlineCtaProps {
  className?: string;
  variant: "primary" | "secondary";
  text: string;
  onClick?: () => any;
  disabled?: boolean;
  loading?: boolean;
  error?: boolean;
}

export default function InlineCta({
  className,
  variant,
  text,
  onClick,
  disabled,
  loading,
  error,
}: InlineCtaProps) {
  return (
    <button
      className={cx(css.InlineCta, className, variant, { error })}
      {...{ onClick, disabled }}
    >
      {loading && (
        <Spinner
          color={variant === "primary" ? "white" : "black"}
          className={css.spinner}
        />
      )}
      {text}
    </button>
  );
}

InlineCta.defaultProps = {
  type: "primary",
};
