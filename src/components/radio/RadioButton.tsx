import React, { forwardRef, useContext } from "react";
import * as styles from "./Radio.css";
import { RadioGroupContext } from "./RadioGroup";
import clsx from "clsx";

interface RadioProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
}

const RadioButton = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, ...props }: RadioProps, ref) => {
    const groupContext = useContext(RadioGroupContext);

    const nameToUse = groupContext?.name ?? props.name;

    const checkedToUse =
      groupContext?.value != null
        ? groupContext.value === props.value
        : props.checked;

    const defaultCheckedToUse =
      groupContext?.defaultValue != null
        ? groupContext.defaultValue === props.value
        : props.defaultChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (groupContext?.onChange) {
        groupContext.onChange(e);
        return;
      }

      if (props?.onChange) {
        props.onChange(e);
      }
    };

    return (
      <label className={styles.label}>
        <input
          ref={ref}
          {...props}
          type="radio"
          name={nameToUse}
          checked={checkedToUse}
          defaultChecked={defaultCheckedToUse}
          className={clsx(styles.radio, props.className)}
          onChange={handleChange}
        />
        {label}
      </label>
    );
  }
);

RadioButton.displayName = "RadioButton";
export default RadioButton;
