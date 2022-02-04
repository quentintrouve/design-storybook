import classNames from "classnames/bind";
import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface svgProps {
  className?: string;
  size?: string;
  color: "white" | "black";
}

export default function svg({ className, size, color }: svgProps) {
  const computedSize = size ?? "24";
  const viewBox = `0 0 ${computedSize} ${computedSize}`;
  console.log(color);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={computedSize}
      height={computedSize}
      viewBox={viewBox}
      fill="none"
      className={cx(className, css.Spinner, color)}
    >
      <path d="M13.5 5.5C13.5 6.32844 12.8284 7 12 7C11.1716 7 10.5 6.32844 10.5 5.5C10.5 4.67156 11.1716 4 12 4C12.8284 4 13.5 4.67156 13.5 5.5ZM12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5C13.5 17.6716 12.8284 17 12 17ZM18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5ZM7 12C7 11.1716 6.32844 10.5 5.5 10.5C4.67156 10.5 4 11.1716 4 12C4 12.8284 4.67156 13.5 5.5 13.5C6.32844 13.5 7 12.8284 7 12ZM7.40381 15.0962C6.57537 15.0962 5.90381 15.7677 5.90381 16.5962C5.90381 17.4246 6.57537 18.0962 7.40381 18.0962C8.23225 18.0962 8.90381 17.4246 8.90381 16.5962C8.90381 15.7678 8.23222 15.0962 7.40381 15.0962ZM16.5962 15.0962C15.7677 15.0962 15.0962 15.7677 15.0962 16.5962C15.0962 17.4246 15.7677 18.0962 16.5962 18.0962C17.4246 18.0962 18.0962 17.4246 18.0962 16.5962C18.0962 15.7678 17.4246 15.0962 16.5962 15.0962ZM7.40381 5.90381C6.57537 5.90381 5.90381 6.57537 5.90381 7.40381C5.90381 8.23225 6.57537 8.90381 7.40381 8.90381C8.23225 8.90381 8.90381 8.23225 8.90381 7.40381C8.90381 6.57537 8.23222 5.90381 7.40381 5.90381Z" />
    </svg>
  );
}