// components/FormInput.tsx
import { FieldError } from "react-hook-form";
import * as styles from "./FormInput.css";
import clsx from "clsx";
import { forwardRef } from "react";

interface FormInputProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: FieldError;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ type = "text", error, required, label, ...props }, ref) => {
    return (
      <label>
        {!!label && (
          <p className={styles.inputLabel}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </p>
        )}

        <input
          {...props}
          type={type}
          ref={ref}
          className={clsx(styles.input, props.className)}
        />
        {!!error && <p className={styles.error}>{error.message}</p>}
      </label>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
