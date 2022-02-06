import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import Cta from "src/Components/Ui-kit/Cta";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface headerProps {
  className?: string;
  user?: string;
  setUser?: (param: string) => any;
}

export default function Header({ className, user, setUser }: headerProps) {
  const navigate = useNavigate();

  const logOut = (): any => {
    setUser("");
    navigate("/");
  };

  return (
    <div className={cx(css.Header, className)}>
      <nav>
        <Cta
          className={css.navItem}
          variant="inline"
          text="Accueil"
          to="/"
          routerLink
        />
        {user ? (
          <Cta
            className={css.navItem}
            variant="inline"
            text="Se déconnecter"
            onClick={() => logOut()}
          />
        ) : (
          <>
            <Cta
              className={css.navItem}
              variant="inline"
              text="Se connecter"
              to="/sign-up"
              routerLink
            />
            <Cta
              className={css.navItem}
              variant="inline"
              text="S'inscrire"
              to="/sign-in"
              routerLink
            />
          </>
        )}
      </nav>
    </div>
  );
}
