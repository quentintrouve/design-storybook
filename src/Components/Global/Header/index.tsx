import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import InlineCta from "src/Components/Ui-kit/Cta/InlineCta";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface headerProps {
  className?: string;
}

export default function Header({ className }: headerProps) {
  return (
    <div className={cx(css.Header, className)}>
      <nav>
        <InlineCta className={css.navItem} text="Home" to="/" routerLink />
        <InlineCta
          className={css.navItem}
          text="Signup"
          to="/sign-up"
          routerLink
        />
        <InlineCta
          className={css.navItem}
          text="Signin"
          to="/sign-in"
          routerLink
        />
      </nav>
    </div>
  );
}
