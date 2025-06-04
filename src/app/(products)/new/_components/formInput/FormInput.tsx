// components/FormInput.tsx
import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import * as styles from "./FormInput.css";
import ErrorMsg from "../../../../ErrorMsg/ErrorMsg";

interface FormInputProps {
  register: UseFormRegisterReturn;
  label: string;
  required: boolean;
  error?: FieldError;
  placeholder?: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
}

const FormInput = ({
  register,
  error,
  placeholder,
  required,
  type = "text",
  label,
}: FormInputProps) => {
  return (
    <>
      <p className={styles.inputLabel}>
        {label}
        {required && <div className={styles.required}>*</div>}
      </p>

      <input
        {...register}
        placeholder={placeholder}
        type={type}
        className={styles.input}
      />
      {error && <ErrorMsg msg={error.message || ""} />}
    </>
  );
};

export default FormInput;
