import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { StyleSheetManager } from "styled-components";

import { store } from "@reducers/store";
import { EXTENSION_DETAIL } from "@constants/constants";
import InjectedApp from "@components/injectedApp/injectedApp";

const loadCssInShadowDOM = (root: ShadowRoot) => {
  const styleRoot = document.createElement("style");
  styleRoot.innerHTML = `
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    
    ul, li, ol {
      list-style-type: none;
    }

    a {
      text-decoration: none;
    }
  `;
  root.appendChild(styleRoot);
};

const injectWidgetInDOM = () => {
  const appContainer = document.createElement(EXTENSION_DETAIL.tagName);
  const shadowContainer = appContainer.attachShadow({ mode: "closed" });
  const shadowRoot = createRoot(shadowContainer);

  if (!shadowRoot) {
    throw new Error("Can't find root element");
  }

  const styleSlot = document.createElement("section");
  shadowContainer.appendChild(styleSlot);
  loadCssInShadowDOM(shadowContainer);

  document.body.appendChild(appContainer);

  // Strict mode re-renders the App twice, Disabling it for dev
  shadowRoot.render(
    <StyleSheetManager target={styleSlot}>
      <Provider store={store}>
        <InjectedApp />
      </Provider>
    </StyleSheetManager>
  );
};

export default injectWidgetInDOM;
