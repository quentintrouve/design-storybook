import classNames from "classnames/bind";

import Title from "src/Components/Ui-kit/Typo/Title";
import Input, { InputProps } from "src/Components/Ui-kit/Form/Input";
import Cta, { CtaProps } from "src/Components/Ui-kit/Cta";
import CheckBox, { CheckBoxProps } from "src/Components/Ui-kit/Form/Checkbox";
import Paragraph, {
  ParagraphProps,
} from "src/Components/Ui-kit/Typo/Paragraph";
import FormFooter from "src/Components/Ui-kit/Form/FormFooter";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface BlocProps {
  name?: "input" | "cta" | "checkbox" | "paragraph";
  inputProps?: InputProps;
  ctaProps?: CtaProps[];
  checkboxProps?: CheckBoxProps;
  paragraphProps?: ParagraphProps;
}

export interface FormProps {
  className?: string;
  title: string;
  blocs?: BlocProps[];
  footerLabel?: string;
  footerLink?: string;
  footerRoute?: string;
}

export default function Form({
  className,
  title,
  blocs,
  footerLabel,
  footerLink,
  footerRoute,
}: FormProps) {
  const blocSerializer = (
    { name, inputProps, ctaProps, checkboxProps, paragraphProps }: BlocProps,
    index: any
  ) => {
    switch (name) {
      case "input":
        return <Input key={index} className={css.input} {...inputProps} />;
      case "cta":
        return ctaProps?.length > 1 ? (
          <div key={index} className={css.multipleButtons}>
            {ctaProps?.map((props) => (
              <Cta key={index} className={css.button} {...props} />
            ))}
          </div>
        ) : (
          <Cta key={index} className={css.button} {...ctaProps?.[0]} />
        );
      case "checkbox":
        return (
          <CheckBox key={index} className={css.checkbox} {...checkboxProps} />
        );
      case "paragraph":
        return (
          <Paragraph
            key={index}
            className={css.paragraph}
            {...paragraphProps}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={cx(css.Form, className)}>
      <div className={css.content}>
        <Title content={title} heading="h1" className={css.title} />
        {blocs && blocs?.map((index, bloc) => blocSerializer(index, bloc))}
        {footerLabel && (
          <FormFooter
            label={footerLabel}
            textButton={footerLink}
            to={footerRoute}
          />
        )}
      </div>
    </div>
  );
}
