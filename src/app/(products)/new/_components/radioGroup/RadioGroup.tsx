import { UseFormRegisterReturn } from "react-hook-form";
import * as styles from "./RadioGroup.css";

interface Option {
  label: string;
  value: string;
}

interface RadioGroupProps {
  name: string;
  options: Option[];
  register: UseFormRegisterReturn;
  required: boolean;
  defaultValue?: string;
}

const RadioGroup = ({
  options,
  register,
  defaultValue,
  required,
}: RadioGroupProps) => {
  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.inputLabel}>
          브랜드
          {required && <span className={styles.required}>*</span>}
        </p>

        {options.map((opt) => (
          <label key={opt.value} className={styles.inputLabel}>
            <input
              className={styles.radioItem}
              type="radio"
              value={opt.value}
              defaultChecked={opt.value === defaultValue}
              {...register}
            />
            {opt.label}
          </label>
        ))}
      </div>
    </>
  );
};

export default RadioGroup;
