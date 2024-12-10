import { useEffect, useState } from "react";

export const useChromeStorageHook = (key: string) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    chrome.storage.local.get([key], (items) => {
      setValue(items[key]);
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const listener = (changes: any, namespace: string) => {
      if (namespace === "local" && changes[key]) {
        setValue(changes[key].newValue);
      }
    };

    // Add the listener and clean it up on unmount
    chrome.storage.onChanged.addListener(listener);
    return () => chrome.storage.onChanged.removeListener(listener);
  }, [key]);

  return value;
};
