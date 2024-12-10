import { SERVICE_WORKER_MESSAGE_TYPE } from "@constants/message";

import injectWidgetInDOM from "./injectWidgetInDOM";

// Injected Content Script
const injectContentScript = () => {
  chrome.runtime.sendMessage(
    {
      type: SERVICE_WORKER_MESSAGE_TYPE.SW_CONNECT_VERIFY_WITH_CONTENT_SCRIPT,
    },
    (response) => {
      if (response) {
        injectWidgetInDOM();
      }
    }
  );
};

injectContentScript();
