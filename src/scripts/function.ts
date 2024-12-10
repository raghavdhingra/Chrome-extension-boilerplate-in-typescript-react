export const getExtensionDetail = () => {
  const manifest = chrome.runtime.getManifest();
  return { manifest };
};
