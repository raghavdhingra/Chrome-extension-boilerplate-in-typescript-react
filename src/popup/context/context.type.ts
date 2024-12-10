export interface IPopupContext {
  isLoggedIn: boolean;
}

export type IPopupContextType = {
  state: IPopupContext;
  updateLoggedIn: (value: boolean) => void;
};
