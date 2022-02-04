import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";


import InlineCta from "src/Components/Ui-kit/Cta/InlineCta";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface headerProps {
  className?: string;
  user?: string;
  setUser?: (param:string) => any;
}

export default function Header({ className, user, setUser }: headerProps) {

  const navigate = useNavigate();

  const logOut = () :any => {
    setUser('');
    navigate('/');
  }

  return (
    <div className={cx(css.Header, className)}>
      <nav>
        <InlineCta className={css.navItem} text="Accueil" to="/" routerLink />
        {user ? (
          <InlineCta
            className={css.navItem}
            text="Se déconnecter"
            onClick={() => logOut()}
          />
        )
        :
        (
          <>
            <InlineCta
              className={css.navItem}
              text="Se connecter"
              to="/sign-up"
              routerLink
            />
            <InlineCta
              className={css.navItem}
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
