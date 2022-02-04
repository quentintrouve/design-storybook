import { useState } from "react"
import classNames from "classnames/bind";

import Form from "src/Components/Global/Form";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface SignInProps {
  className?: string;
}

export default function SignIn({ className }: SignInProps) {

  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  const handleClick = () => {
    console.log('Inscrit !')
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
              placeholder: "Nom Prénom",
              label: "Dupont Marc",
              name: "entity",
              id: "signin-entity",
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
              onClick: () => handleClick(),
              disabled: buttonIsDisabled,
            }
          }
        ]}
      />
    </div>
  );
}
