import classNames from "classnames/bind";

import Form from "src/Components/Global/Form";
import InputText from "src/Components/Ui-kit/Form/InputText";
import InputPassword from "src/Components/Ui-kit/Form/InputPassword";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface SignInProps {
  className?: string;
}

export default function SignIn({ className }: SignInProps) {
  return (
    <div className={cx(css.Signin, className)}>
      <Form title="S'inscrire">
        <InputText 
          
        />
        <InputPassword />
      </Form>
    </div>
  )
}
