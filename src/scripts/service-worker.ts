import { serviceWorkerListner } from "./event-listener/content-script-listener";
import { serviceWorkerExternalWebsiteListner } from "./event-listener/external-website-listener";

const initialize_service_worker = () => {
  chrome.runtime.onMessage.addListener(serviceWorkerListner);
  chrome.runtime.onMessageExternal.addListener(
    serviceWorkerExternalWebsiteListner
  );

  chrome.runtime.onSuspend.addListener(() => {
    chrome.runtime.onMessage.removeListener(serviceWorkerListner);
    chrome.runtime.onMessage.removeListener(
      serviceWorkerExternalWebsiteListner
    );
  });
};

initialize_service_worker();
