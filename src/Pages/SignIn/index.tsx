import classNames from "classnames/bind";

import Form from "src/Components/Global/Form";
import Input from "src/Components/Ui-kit/Form/Input";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface SignInProps {
  className?: string;
}

export default function SignIn({ className }: SignInProps) {
  return (
    <div className={cx(css.Signin, className)}>
      <Form
        title="S'inscrire"
        blocs={[
          {
            name: "input",
            inputProps: {
              type: "text",
              placeholder: "Nom Prénom",
              label: "Nom Prénom",
              name: "entity",
              id: "signin-entity",
            },
          },
          {
            name: "input",
            inputProps: {
              type: "mail",
              placeholder: "Mail",
              label: "Mail",
              name: "mail",
              id: "signin-mail",
            },
          },
          {
            name: "checkbox",
            checkboxProps: {
              label: "souviens",
              name: " checkbox",
              id: "signin-checkbox",
            },
          },
        ]}
      />
    </div>
  );
}
