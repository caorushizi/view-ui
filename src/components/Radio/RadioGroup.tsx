import clsx from "clsx";
import {
  Children,
  cloneElement,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";
import { radioGroup } from "./styles.css";

interface RadioGroupProps extends PropsWithChildren {
  value: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

const RadioGroup: FC<RadioGroupProps> = ({
  children,
  disabled,
  defaultValue,
  value,
}) => {
  const [curr, setCurr] = useState<string>(defaultValue || value);

  const handleClick = (e) => {
    const value = e.target.value;
    setCurr(value);
  };

  const newChildren = Children.map(children, (child) => {
    return cloneElement(child, {
      checked: curr === child.props.value,
      onChange: handleClick,
      disabled,
    });
  });

  return <span className={radioGroup}>{newChildren}</span>;
};

export default RadioGroup;
