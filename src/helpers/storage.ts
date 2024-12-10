// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setValueToChromeStorage = (key: string, value: any) => {
  return new Promise((res, rej) => {
    chrome.storage.local
      .set({ [key]: value })
      .then(() => {
        res(value);
      })
      .catch((error) => rej(error));
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getValueFromChromeStorage = (key: string): any => {
  return new Promise((res, rej) => {
    chrome.storage.local
      .get(key)
      .then((data) => {
        if (data?.[key]) {
          res(data[key]);
          return;
        }
        res(null);
      })
      .catch((error) => rej(error));
  });
};

export const removeKeyFromChromeStorage = (key: string) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local
      .remove([key])
      .then(() => resolve(true))
      .catch(() => reject(false));
  });
};
