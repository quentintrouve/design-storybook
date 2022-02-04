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
      <Form title="S'inscrire">
        <Input
          type="text"
          name="entity"
          placeholder="DOE Jean"
          id="signin-name"
          label="Nom Prénom"
        />
      </Form>
    </div>
  )
}
