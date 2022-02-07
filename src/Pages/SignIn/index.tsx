import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import classNames from "classnames/bind";

import Form from "src/Components/Slices/Form";

import { RenderedValue } from "src/Components/Ui-kit/Form/Input";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface SignUpProps {
  className?: string;
  setUser?: (param: string) => any;
}

export default function SignIn({ className, setUser }: SignUpProps) {
  const navigate = useNavigate();

  const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(true);
  const [userEmail, setUserEmail] = useState<RenderedValue>();
  const [userPassword, setUserPassword] = useState<RenderedValue>();

  const handleClick = (): any => {
    setUser(userEmail?.value);
    navigate("/");
  };

  useEffect(() => {
    document.title = "Connexion";
  }, []);

  useEffect((): any => {
    if (userEmail?.isValid && userPassword?.isValid) {
      setButtonIsDisabled(false);
    } else {
      setButtonIsDisabled(true);
    }
  }, [userEmail, userPassword]);

  return (
    <div className={cx(css.Signup, className)}>
      <Form
        title="Se connecter"
        footerLabel="Vous n'avez pas de compte ?"
        footerLink="S'inscrire"
        footerRoute="/sign-up"
        blocs={[
          {
            name: "input",
            inputProps: {
              type: "email",
              placeholder: "marcdupont@gmail.com",
              label: "Email",
              name: "email",
              id: "signup-mail",
              required: true,
              getValue: (value) => setUserEmail(value),
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
              required: true,
              getValue: (value) => {
                //console.log({ value });
                setUserPassword(value);
              },
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
            ctaProps: [
              {
                variant: "primary",
                text: "Se connecter",
                onClick: () => handleClick(),
                disabled: buttonIsDisabled,
              },
            ],
          },
          {
            name: "cta",
            ctaProps: [
              {
                variant: "inline",
                text: "Mot de passe oublié ?",
                routerLink: true,
                to: "/forgot-password",
              },
            ],
          },
        ]}
      />
    </div>
  );
}
