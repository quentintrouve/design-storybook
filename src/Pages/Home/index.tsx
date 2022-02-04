import classNames from "classnames/bind";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface HomeProps {
  className?: string;
  user?: string;
}

export default function Home({ className, user}: HomeProps) {
  return (
    <div className={cx(css.Home, className)}>
      Bonjour {user}
    </div>
  )
}
