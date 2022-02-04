import classNames from "classnames/bind";
import { ReactChildren } from "react";

import Title from "src/Components/Ui-kit/Typo/Title";
import Input, { InputProps } from "src/Components/Ui-kit/Form/Input";
import SquaredCta, {
  SquaredCtaProps,
} from "src/Components/Ui-kit/Cta/SquaredCta";
import CheckBox, { CheckBoxProps } from "src/Components/Ui-kit/Form/Checkbox";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface BlocProps {
  name?: "input" | "cta" | "checkbox";
  inputProps?: InputProps;
  ctaProps?: SquaredCtaProps;
  checkboxProps?: CheckBoxProps;
}

export interface FormProps {
  className?: string;
  title: string;
  blocs?: BlocProps[];
}

export default function Form({ className, title, blocs }: FormProps) {
  const blocSerializer = ({
    name,
    inputProps,
    ctaProps,
    checkboxProps,
  }: BlocProps) => {
    switch (name) {
      case "input":
        return <Input className={css.input} {...inputProps} />;
      case "cta":
        return <SquaredCta {...ctaProps} />;
      case "checkbox":
        return <CheckBox {...checkboxProps} />;
      default:
        return null;
    }
  };

  return (
    <div className={cx(css.Form, className)}>
      <div className={css.content}>
        <Title content={title} heading="h1" className={css.title} />
        {blocs && blocs?.map((bloc) => blocSerializer(bloc))}
      </div>
    </div>
  );
}
