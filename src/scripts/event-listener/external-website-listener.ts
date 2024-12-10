import { getExtensionDetail } from "@scripts/function";
import { EXTENSION_COMMUTE_MESSAGE_TYPE } from "@constants/message";

export const serviceWorkerExternalWebsiteListner = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request: { type: EXTENSION_COMMUTE_MESSAGE_TYPE; payload: any },
  _sender: chrome.runtime.MessageSender,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reply: (payload?: any) => void
) => {
  (async () => {
    switch (request.type) {
      case EXTENSION_COMMUTE_MESSAGE_TYPE.CONNECTION_REQUEST: {
        const version = getExtensionDetail();
        reply(version || "");
        return true;
      }

      default: {
        reply();
        return true;
      }
    }
  })();
  return true;
};
