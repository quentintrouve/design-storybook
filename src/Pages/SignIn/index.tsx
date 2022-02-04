import { useState } from "react"
import { useNavigate } from "react-router";
import classNames from "classnames/bind";

import Form from "src/Components/Global/Form";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface SignInProps {
  className?: string;
  user?: string;
  setUser?: (param:string) => any;
}

export default function SignIn({ className, user, setUser }: SignInProps) {

  const navigate = useNavigate();

  const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>(user);

  const handleChangeEntity = (e:any) :any => {
    if(e.target.value) {
      setButtonIsDisabled(false)
    } else {
      setButtonIsDisabled(true)
    }
  }

  const handleChangeEmail = (e:any) :any => {
    setUserName(e.target.value)
  }

  const handleClick = () :any => {
    setUser(userName)
    navigate('/')
  }

  return (
    <div className={cx(css.Signin, className)}>
      <Form
        title="S'inscrire"
        footerLabel="Vous avez déjà un compte ?"
        footerLink="Se connecter"
        footerRoute="/sign-up"
        blocs={[
          {
            name: "input",
            inputProps: {
              type: "text",
              placeholder: "Dupont Marc",
              label: "Nom Prénom",
              name: "entity",
              id: "signin-entity",
              onChange: (e:any) => handleChangeEntity(e)
            },
          },
          {
            name: "input",
            inputProps: {
              type: "mail",
              placeholder: "marcdupont@gmail.com",
              label: "Email",
              name: "mail",
              id: "signin-mail",
              onChange: (e:any) => handleChangeEmail(e)
            },
          },
          {
            name: "input",
            inputProps: {
              type: "password",
              placeholder: "•••••••••••••",
              label: "Mot de passe",
              name: "password",
              id: "signin-password",
            },
          },
          {
            name: "checkbox",
            checkboxProps: {
              label: "Se souvenir du mot de passe",
              name: "checkbox",
              id: "signin-checkbox",
            },
          },
          {
            name: "cta",
            ctaProps: {
              variant: "primary",
              text: "Inscription",
              disabled: buttonIsDisabled,
              onClick: () => handleClick(),
            }
          }
        ]}
      />
    </div>
  );
}
