import classNames from "classnames/bind";

import Title from "src/Components/Ui-kit/Typo/Title";
import Input, { InputProps } from "src/Components/Ui-kit/Form/Input";
import SquaredCta, { SquaredCtaProps } from "src/Components/Ui-kit/Cta/SquaredCta";
import InlineCta, { InlineCtaProps } from "src/Components/Ui-kit/Cta/InlineCta";
import CheckBox, { CheckBoxProps } from "src/Components/Ui-kit/Form/Checkbox";
import Paragraph, { ParagraphProps } from "src/Components/Ui-kit/Typo/Paragraph"
import FormFooter from "src/Components/Ui-kit/Form/FormFooter";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

interface BlocProps {
  name?: "input" | "cta" | "inline-cta" | "multiple-cta" | "checkbox" | "paragraph";
  inputProps?: InputProps;
  ctaProps?: SquaredCtaProps;
	inlineCtaProps?: InlineCtaProps;
	firstCtaProps?: SquaredCtaProps;
	secondCtaProps?: SquaredCtaProps;
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
	footerRoute }: FormProps) {
  
	const blocSerializer = ({
    name,
    inputProps,
    ctaProps,
		firstCtaProps,
		secondCtaProps,
		inlineCtaProps,
    checkboxProps,
		paragraphProps
  }: BlocProps) => {
    switch (name) {
      case "input":
        return <Input className={css.input} {...inputProps} />;
      case "cta":
        return <SquaredCta className={css.button} {...ctaProps} />;
      case "inline-cta":
        return <InlineCta className={css.inlineButton} {...inlineCtaProps} />;
      case "multiple-cta":
        return (
					<div className={css.multipleButtons}>
						<SquaredCta {...firstCtaProps} />
						<SquaredCta {...secondCtaProps} />
					</div>
				);
      case "checkbox":
        return <CheckBox className={css.checkbox} {...checkboxProps} />;
      case "paragraph":
        return <Paragraph className={css.paragraph} {...paragraphProps} />;
      default:
        return null;
    }
  };

  return (
    <div className={cx(css.Form, className)}>
      <div className={css.content}>

        <Title content={title} heading="h1" className={css.title} />

        {blocs && blocs?.map((bloc) => blocSerializer(bloc))}

				{footerLabel && <FormFooter label={footerLabel} textButton={footerLink} to={footerRoute}/>}
      </div>
    </div>
  );
}
