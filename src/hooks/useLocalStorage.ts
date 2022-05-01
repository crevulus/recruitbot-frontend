import { useEffect, useState } from "react";

export const useLocalStorage = (key: string) => {
  const [isValuePresent, setIsValuePresent] = useState(false);
  const [localStorageBooleanValue, setLocalStorageBooleanValue] = useState<
    boolean | undefined
  >();

  const handleAddBooleanToLocalStorage = (key: string, value: boolean) => {
    window.localStorage.setItem(key, value.toString());
    window.dispatchEvent(new Event("storage"));
  };

  const value = window.localStorage.getItem(key);

  const handleStorageBooleanListener = () => {
    const booleanValue = value === "true";
    setLocalStorageBooleanValue(booleanValue);
  };

  useEffect(() => {
    if (value === null) {
      setIsValuePresent(false);
      setLocalStorageBooleanValue(undefined);
    } else {
      setIsValuePresent(true);
      setLocalStorageBooleanValue(value === "true");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, localStorageBooleanValue]);

  useEffect(() => {
    window.addEventListener("storage", handleStorageBooleanListener);
    return () =>
      window.removeEventListener("storage", handleStorageBooleanListener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return {
    isValuePresent,
    localStorageBooleanValue,
    handleAddBooleanToLocalStorage,
  };
};
