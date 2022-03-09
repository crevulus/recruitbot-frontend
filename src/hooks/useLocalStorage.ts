import { useEffect, useState } from "react";

export const useLocalStorage = (key: string) => {
  const [valueIsPresent, setValueIsPresent] = useState(false);
  const [localStorageBooleanValue, setLocalStorageBooleanValue] = useState<
    boolean | undefined
  >();

  const handleAddBooleanToLocalStorage = (key: string, value: boolean) => {
    window.localStorage.setItem(key, value.toString());
    window.dispatchEvent(new Event("storage"));
  };

  const handleStorageBooleanListener = () => {
    const value = window.localStorage.getItem(key);
    const booleanValue = value === "true";
    setLocalStorageBooleanValue(booleanValue);
  };

  useEffect(() => {
    if (window.localStorage.getItem(key) === null) {
      setValueIsPresent(false);
    } else {
      setValueIsPresent(true);
    }
  }, [key, localStorageBooleanValue]);

  useEffect(() => {
    window.addEventListener("storage", handleStorageBooleanListener);
    return () =>
      window.removeEventListener("storage", handleStorageBooleanListener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return {
    valueIsPresent,
    localStorageBooleanValue,
    handleAddBooleanToLocalStorage,
  };
};
