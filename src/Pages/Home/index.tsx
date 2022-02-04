import classNames from "classnames/bind";

import InputText from "../../Components/Ui-kit/InputText"
import InputPassword from "../../Components/Ui-kit/InputPassword"


import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface HomeProps {
  className?: string;
}

export default function Home({ className }: HomeProps) {
  return (
    <div className={cx(css.Home, className)}>
      <InputText label="Email" name="email" placeholder="Email"/>
      <InputPassword label="Mot de passe" name="password" placeholder="Mot de passe"/>
    </div>
  )
}
