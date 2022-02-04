import { useState } from "react";
import { useNavigate } from "react-router";
import classNames from "classnames/bind";

import Form from "src/Components/Global/Form";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface SignUpProps {
  className?: string;
  user?: string;
  setUser?: (param:string) => any;
}

export default function SignIn({ className, user, setUser }: SignUpProps) {

  const navigate = useNavigate();

  const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>(user);

  const handleChange = (e:any) :any => {
    if(e.target.value) {
      setUserName(e.target.value)
      setButtonIsDisabled(false)
    } else {
      setUserName('')
      setButtonIsDisabled(true)
    }
  }

  const handleClick = () :any => {
    setUser(userName)
    navigate('/')
  }

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
