import { createContext, forwardRef, useId, useMemo } from "react";
import * as styles from "./RadioGroup.css";
import clsx from "clsx";
import { UseFormRegisterReturn } from "react-hook-form";

interface RadioGroupProps
  extends Omit<React.ComponentPropsWithoutRef<"fieldset">, "onChange"> {
  value?: string | number;
  required?: boolean;
  defaultValue?: string | number;
  children: React.ReactNode;
  label?: React.ReactNode;
  register?: UseFormRegisterReturn;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioGroupContext = createContext<Pick<
  RadioGroupProps,
  "name" | "value" | "onChange" | "defaultValue" | "register"
> | null>(null);

const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  (
    { label, value, defaultValue, children, onChange, register, ...props },
    ref
  ) => {
    const uid = useId();
    const nameToUse = props?.name ?? uid;

    const contextValue = useMemo(() => {
      return {
        value: value,
        defaultValue: defaultValue,
        register,
        name: nameToUse,
        onChange,
      };
    }, [nameToUse, register, onChange, value, defaultValue]);

    return (
      <fieldset
        {...props}
        ref={ref}
        className={clsx(styles.wrapper, props.className)}
      >
        <RadioGroupContext.Provider value={contextValue}>
          <legend className={styles.inputLabel}>{label}</legend>
          {children}
        </RadioGroupContext.Provider>
      </fieldset>
    );
  }
);

RadioGroup.displayName = "RadioGroup";

export default RadioGroup;
