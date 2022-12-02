import { useState } from "react";

export const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);
  const toggler = () => {
    setValue((prev) => !prev);
  };

  return { value, toggler };
};
