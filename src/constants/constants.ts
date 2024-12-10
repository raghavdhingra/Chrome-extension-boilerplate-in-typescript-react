export const EXTENSION_DETAIL = {
  name: "extension-name",
  title: "extension-title",
  tagName: "extension-tag-name",
};
export const CHROME_EXTENSION_ID = "";
export const EXTENSION_CHROME_WEBSTORE_LINK = `https://chromewebstore.google.com/detail/${EXTENSION_DETAIL.name}/${CHROME_EXTENSION_ID}`;
export const EXTENSION_CHROME_WEBSTORE_REVIEW_LINK = `${EXTENSION_CHROME_WEBSTORE_LINK}/reviews`;

export const BACKEND_ENDPOINT =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:4000";
