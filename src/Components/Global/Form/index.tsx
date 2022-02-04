import classNames from "classnames/bind";
import { ReactChildren } from "react";

import Title from "src/Components/Ui-kit/Typo/Title";
import { JsxElement } from "typescript";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

export interface FormProps {
  className?: string;
	title: string;
	children: JSX.Element | JSX.Element[];
}

export default function Form({ 
  className, 
	title,
	children
 }: FormProps) {

  return (
    <div className={cx(css.Form, className)}>
			<div className={css.content}>
				<Title content={title} heading="h1" className={css.title}/>
				{children}
			</div>
    </div>
  )
}