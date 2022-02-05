import { useState, useEffect } from "react"
import { useNavigate } from "react-router";
import classNames from "classnames/bind";

import Form from "src/Components/Global/Form";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface SignInProps {
  className?: string;
  setUser?: (param:string) => any;
}

export default function SignIn({ className, setUser }: SignInProps) {

  const navigate = useNavigate();

  const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(true);

  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  

  const handleChange = (e:any) :any => {

    switch(e.target.name) {
      case 'entity':
        setUserName(e.target.value)
        break;
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

  useEffect(() :any => {
    if((userName && userName.length > 0) && (userEmail && userEmail.length > 0) && (userPassword && userPassword.length > 0)) {
      setButtonIsDisabled(false)
    } else {
      setButtonIsDisabled(true)
    }
  }, [userName, userEmail, userPassword])



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
              onChange: (e:any) => handleChange(e)
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
              id: "signin-password",
              onChange: (e:any) => handleChange(e)
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
