import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import classNames from "classnames/bind";

import Form from "src/Components/Slices/Form";

import { RenderedValue } from "src/Components/Ui-kit/Form/Input";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface SignInProps {
  className?: string;
  setUser?: (param: string) => any;
}

export default function SignUp({ className, setUser }: SignInProps) {
  const navigate = useNavigate();

  const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(true);

  const [userName, setUserName] = useState<RenderedValue>();
  const [userEmail, setUserEmail] = useState<RenderedValue>();
  const [userPassword, setUserPassword] = useState<RenderedValue>();

  const handleClick = (): void => {
    setUser(userEmail?.value);
    navigate("/");
  };

  useEffect(() => {
    document.title = "Inscription";
  }, []);

  useEffect((): any => {
    if (userName?.isValid && userEmail?.isValid && userPassword?.isValid) {
      setButtonIsDisabled(false);
    } else {
      setButtonIsDisabled(true);
    }
  }, [userName, userEmail, userPassword]);

  return (
    <div className={cx(css.Signin, className)}>
      <Form
        title="S'inscrire"
        footerLabel="Vous avez déjà un compte ?"
        footerLink="Se connecter"
        footerRoute="/sign-in"
        blocs={[
          {
            name: "input",
            inputProps: {
              type: "text",
              placeholder: "Dupont Marc",
              label: "Nom Prénom",
              name: "entity",
              id: "signin-entity",
              required: true,
              getValue: (value) => setUserName(value),
            },
          },
          {
            name: "input",
            inputProps: {
              type: "email",
              placeholder: "marcdupont@gmail.com",
              label: "Email",
              name: "email",
              id: "signin-mail",
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
              id: "signin-password",
              required: true,
              getValue: (value) => setUserPassword(value),
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
            ctaProps: [
              {
                variant: "primary",
                text: "Inscription",
                disabled: buttonIsDisabled,
                onClick: () => handleClick(),
              },
            ],
          },
        ]}
      />
    </div>
  );
}
