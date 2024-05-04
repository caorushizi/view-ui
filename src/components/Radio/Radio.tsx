import {
  useEffect,
  useRef,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";
import {
  radio,
  radioInner,
  radioInput,
  radioWrapper,
  radioTheme,
  radioChecked,
  radioWrapperDisabled,
  radioDisabled,
} from "./styles.css";
import clsx from "clsx";

interface RadioProps extends PropsWithChildren {
  value: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
}

const Radio: FC<RadioProps> = ({
  checked,
  disabled,
  defaultValue,
  value,
  onChange,
}) => {
  const inputRef = useRef(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    if (typeof checked !== "undefined" && checked !== isChecked) {
      setIsChecked(checked);
    }
  }, [checked]);

  const handleClick = (e: any) => {
    if (disabled || isChecked) {
      return;
    }

    if (typeof checked !== "undefined") {
      setIsChecked(true);
    }

    if (typeof onChange === "function") {
      e.target = inputRef.current;
      onChange(e);
    }
  };

  return (
    <label
      className={clsx([
        radioWrapper,
        radioTheme,
        {
          [radioWrapperDisabled]: disabled,
        },
      ])}
    >
      <span
        className={clsx([
          radio,
          {
            [radioChecked]: checked,
            [radioDisabled]: disabled,
          },
        ])}
      >
        <input
          ref={inputRef}
          className={radioInput}
          type="radio"
          disabled={disabled}
          defaultValue={defaultValue}
          value={value}
          onChange={handleClick}
        />
        <span className={radioInner}></span>
      </span>
      <span>Radio</span>
    </label>
  );
};

export default Radio;
