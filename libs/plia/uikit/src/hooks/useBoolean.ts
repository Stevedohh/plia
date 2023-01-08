import { Accessor, createSignal, Setter } from 'solid-js';

type ReturnType = {
  value: Accessor<boolean>;
  setValue: Setter<boolean>;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
};

export const useBoolean = (defaultValue?: boolean): ReturnType => {
  const [value, setValue] = createSignal(!!defaultValue);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  const toggle = () => setValue((x) => !x);

  return {
    value,
    setValue,
    setTrue,
    setFalse,
    toggle,
  };
};
