import { useState } from "react";
import classNames from "classnames/bind";
import Label from "../Label";
import ErrorForm from "../ErrorForm";

import EyeOpen from "src/Components/Ui-kit/Icons/EyeOpen";
import EyeClosed from "src/Components/Ui-kit/Icons/EyeClosed";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

var regEmail = new RegExp(
  "^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$",
  "i"
);

export interface RenderedValue {
  value: string;
  isValid: boolean;
}

export interface InputProps {
  className?: string;
  type: "email" | "text" | "password";
  name: string;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
  isError?: boolean;
  id?: string;
  label?: string;
  onChange?: (e: any) => any;
  getValue?: (value: RenderedValue) => void;
}

export default function Input({
  className,
  type,
  name,
  placeholder,
  disabled,
  required,
  id,
  label,
  getValue,
}: InputProps) {
  const [value, setValue] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(!required);
  const [error, setError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const checkIfValid = (text: string) => {
    if (required) {
      type !== "email"
        ? text?.length > 0
          ? setIsValid(true)
          : setIsValid(false)
        : regEmail.test(text)
        ? setIsValid(true)
        : setIsValid(false);
    }
  };

  const showError = () => {
    if (type !== "email" || value?.length === 0) {
      return <ErrorForm content="Le champ est obligatoire." />;
    } else {
      return <ErrorForm content="Le champ email n'est pas valide." />;
    }
  };

  return (
    <fieldset className={cx(css.InputWrapper, className)}>
      {label && <Label text={label} htmlFor={id} />}
      <div className={css.inputContainer}>
        <input
          className={cx(css.Input, { error, disabled })}
          value={value}
          onChange={(e) => {
            setValue(e?.target?.value);
            checkIfValid(e?.target?.value);
            getValue({ value: e?.target?.value, isValid });
            setError(false);
          }}
          onBlur={() => !isValid && setError(true)}
          onFocus={() => setError(false)}
          {...{ type, name, placeholder, required, disabled, id }}
        />
        {type === "password" && (
          <>
            {showPassword && (
              <input
                className={cx(css.Input, css.fakeInput)}
                value={value}
                onChange={(e) => setValue(e?.target?.value)}
              />
            )}
            <button
              className={cx(css.eye, css.open)}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeClosed /> : <EyeOpen />}
            </button>
          </>
        )}
        {required && error && showError()}
      </div>
    </fieldset>
  );
}
