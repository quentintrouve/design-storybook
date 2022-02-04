import classNames from "classnames/bind";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface ParagraphProps {
  className?: string;
  content: string;
}

export default function Title({ className, content }: ParagraphProps) {

  return (
    <p className={cx(css.Paragraph, className)}>
      {content}
    </p>
  );
}
