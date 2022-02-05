import { useState, useEffect} from "react";
import { useNavigate } from "react-router";
import classNames from "classnames/bind";

import Form from "src/Components/Global/Form";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface SignUpProps {
  className?: string;
  setUser?: (param:string) => any;
}

export default function SignIn({ className, setUser }: SignUpProps) {

  const navigate = useNavigate();

  const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(true);
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');


  const handleChange = (e:any) :any => {

    switch(e.target.name) {
      case 'mail':
        setUserEmail(e.target.value)
        break;
      case 'password':
        setUserPassword(e.target.value)
        break;
      default:
        return null
    }
  }

  const handleClick = () :any => {
    setUser(userEmail)
    navigate('/')
  }

  useEffect(() => {
    if((userEmail && userEmail.length > 0) && (userPassword && userPassword.length > 0)) {
      setButtonIsDisabled(false)
    } else {
      setButtonIsDisabled(true)
    }
  }, [userEmail, userPassword])

  return (
    <div className={cx(css.Signup, className)}>
      <Form
        title="Se connecter"
        footerLabel="Vous n'avez pas de compte ?"
        footerLink="S'inscrire"
        footerRoute="/sign-in"
        blocs={[
          {
            name: "input",
            inputProps: {
              type: "mail",
              placeholder: "marcdupont@gmail.com",
              label: "Email",
              name: "mail",
              id: "signup-mail",
              onChange: (e:any) => handleChange(e)
            },
          },
          {
            name: "input",
            inputProps: {
              type: "password",
              placeholder: "•••••••••••••",
              label: "Mot de passe",
              name: "password",
              id: "signup-password",
              onChange: (e:any) => handleChange(e)
            },
          },
          {
            name: "checkbox",
            checkboxProps: {
              label: "Se souvenir du mot de passe",
              name: "checkbox",
              id: "signup-checkbox",
            },
          },
          {
            name: "cta",
            ctaProps: {
              variant: "primary",
              text: "Se connecter",
              onClick: () => handleClick(),
              disabled: buttonIsDisabled,
            }
          },
          {
            name: "inline-cta",
            inlineCtaProps: {
              text: "Mot de passe oublié ?", 
              routerLink: true,
              to: "/forgot-password"
            }
          }
        ]}
      />
    </div>
  );
}
