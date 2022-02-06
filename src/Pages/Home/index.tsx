import { useEffect } from "react";
import classNames from "classnames/bind";
import Title from "src/Components/Ui-kit/Typo/Title";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface HomeProps {
  className?: string;
  user?: string;
}

export default function Home({ className, user }: HomeProps) {
  useEffect(() => {
    document.title = "Welcome !";
  }, []);

  return (
    <div className={cx(css.Home, className)}>
      <div className={css.content}>
        <Title content="Bonjour" heading="h2" />
        <Title content={user} heading="h2" />
      </div>
    </div>
  );
}
