export const injectStyleSheet = () => {
  const styleEl = document.createElement("style");
  styleEl.innerHTML = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    li {
      list-style: none;
    }
  `;

  document.body.appendChild(styleEl);
};
