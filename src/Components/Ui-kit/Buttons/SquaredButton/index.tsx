import classNames from "classnames/bind";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface SquaredButtonProps {
  className?: string;
  type: "primary" | "secondary";
  text: string;
  onClick?: () => any;
}

export default function SquaredButton({
  className,
  type,
  text,
  onClick,
}: SquaredButtonProps) {
  return (
    <button className={cx(css.SquaredButton, className, type)} {...{ onClick }}>
      {text}
    </button>
  );
}

SquaredButton.defaultProps = {
  type: "primary",
};
