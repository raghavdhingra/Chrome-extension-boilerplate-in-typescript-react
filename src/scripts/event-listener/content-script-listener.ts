import { SERVICE_WORKER_MESSAGE_TYPE } from "@constants/message";

export const serviceWorkerListner = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request: { type: SERVICE_WORKER_MESSAGE_TYPE; payload: any },
  _sender: chrome.runtime.MessageSender,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reply: (payload?: any) => void
) => {
  (async () => {
    switch (request.type) {
      case SERVICE_WORKER_MESSAGE_TYPE.SW_CONNECT_VERIFY_WITH_CONTENT_SCRIPT: {
        reply(true);
        return true;
      }

      default: {
        // Default Case, when a request is sent and not covered any case
        reply();
        return true;
      }
    }
  })();
  return true;
};
