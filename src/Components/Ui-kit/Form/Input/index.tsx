import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Label from "../Label";

import EyeOpen from "src/Components/Ui-kit/Icons/EyeOpen";
import EyeClosed from "src/Components/Ui-kit/Icons/EyeClosed";

import css from "./styles.module.scss";
const cx = classNames.bind(css);

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
  isError,
}: InputProps) {
  const [value, setValue] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(!required);
  const [error, setError] = useState<boolean>(isError);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    getValue({ value, isValid });
    console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value));
    if (required) {
      type !== "email"
        ? value?.length > 0
          ? setIsValid(true)
          : setIsValid(false)
        : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
        ? setIsValid(true)
        : setIsValid(false);
    }
  }, [value]);

  return (
    <div className={cx(css.InputWrapper, className)}>
      {label && <Label text={label} htmlFor={id} />}
      <div className={css.inputContainer}>
        <input
          className={cx(css.Input, { error, disabled })}
          onChange={(e) => {
            setValue(e?.target?.value);
            setError(false);
          }}
          onBlur={() => !isValid && setError(true)}
          {...{ type, name, placeholder, required, disabled, id }}
        />
        {type === "password" && (
          <>
            {showPassword && (
              <input className={cx(css.Input, css.fakeInput)} value={value} />
            )}
            <button
              className={cx(css.eye, css.open)}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeClosed /> : <EyeOpen />}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
