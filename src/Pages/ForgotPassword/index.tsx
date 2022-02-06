import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import Form from "src/Components/Global/Form";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface ForgotPasswordProps {
  className?: string;
}

export default function ForgotPassword({ className }: ForgotPasswordProps) {
  const navigate = useNavigate();

  const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(true);

  return (
    <div className={cx(css.Signin, className)}>
      <Form
        title="Retrouvez votre compte"
        blocs={[
          {
            name: "paragraph",
            paragraphProps: {
              content:
                "Veuillez entrer votre adresse email pour rechercher votre compte.",
            },
          },
          {
            name: "input",
            inputProps: {
              type: "email",
              placeholder: "marcdupont@gmail.com",
              label: "Email",
              name: "email",
              id: "forgotpassword-mail",
              onChange: () => setButtonIsDisabled(false),
            },
          },
          {
            name: "cta",
            ctaProps: [
              {
                variant: "secondary",
                text: "Retour",
                onClick: () => navigate(-1),
              },
              {
                variant: "primary",
                text: "Envoyer",
                onClick: () => navigate("/"),
                disabled: buttonIsDisabled,
              },
            ],
          },
        ]}
      />
    </div>
  );
}
