import { createContext, forwardRef, useId, useMemo } from "react";
import * as styles from "./RadioGroup.css";
import clsx from "clsx";

interface RadioGroupProps
  extends Omit<React.ComponentPropsWithoutRef<"fieldset">, "onChange"> {
  children: React.ReactNode;
  value?: string | number;
  defaultValue?: string | number;
  label?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioGroupContext = createContext<Pick<
  RadioGroupProps,
  "name" | "value" | "onChange" | "defaultValue"
> | null>(null);

const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  ({ label, value, defaultValue, children, onChange, ...props }, ref) => {
    const uid = useId();
    const nameToUse = props?.name ?? uid;

    const contextValue = useMemo(() => {
      return {
        value,
        defaultValue,
        onChange,
        name: nameToUse,
      };
    }, [nameToUse, onChange, value, defaultValue]);

    return (
      <fieldset
        {...props}
        ref={ref}
        className={clsx(styles.radioGroup, props.className)}
      >
        <legend className={styles.radioGroupLegend}>{label}</legend>
        <RadioGroupContext.Provider value={contextValue}>
          {children}
        </RadioGroupContext.Provider>
      </fieldset>
    );
  }
);

RadioGroup.displayName = "RadioGroup";

export default RadioGroup;
