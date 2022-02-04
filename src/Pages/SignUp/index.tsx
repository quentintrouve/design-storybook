import { useState } from "react"
import classNames from "classnames/bind";

import Form from "src/Components/Global/Form";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface SignUpProps {
  className?: string;
}

export default function SignIn({ className }: SignUpProps) {

  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  const handleClick = () => {
    console.log('Connecté !')
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
