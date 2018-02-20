export interface ConfirmState {
  onConfirm: () => any;
  onCancel: () => any;
  isOpen: boolean;
  message: string;
  options?: any;
}
export type ConfirmInjectedProps = ConfirmState;

export enum ConfirmActionTypes {
  SHOW = '@react-redux-confirm/SHOW',
  HIDE = '@react-redux-confirm/HIDE'
}

export interface ShowActionPayload {
  onConfirm: () => any;
  onCancel?: () => any;
  message?: string;
  options?: any;
}
export interface ShowAction {
  type: ConfirmActionTypes.SHOW;
  payload: ShowActionPayload;
}
export interface HideAction {
  type: ConfirmActionTypes.HIDE;
}
export type Actions = ShowAction | HideAction;
