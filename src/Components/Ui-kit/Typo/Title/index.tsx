import classNames from "classnames/bind";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface TitleProps {
  className?: string;
  content: string;
  heading: "h1" | "h2" | "h3";
}

export default function Title({ className, content, heading }: TitleProps) {
  const CustomTag = heading;
  return (
    <CustomTag className={cx(css.Title, className, heading)}>
      {content}
    </CustomTag>
  );
}
