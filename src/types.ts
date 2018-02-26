export interface ConfirmInjectedProps {
  onConfirm: () => any;
  onCancel: () => any;
  isOpen: boolean;
  message: string;
  willBeDestroyed: boolean;
  options?: any;
}

export type ConfirmState = ConfirmInjectedProps;

export enum ConfirmActionTypes {
  SHOW = '@react-redux-confirm/SHOW',
  HIDE = '@react-redux-confirm/HIDE',
  DESTROY = '@react-redux-confirm/DESTROY'
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
export interface DestroyAction {
  type: ConfirmActionTypes.DESTROY;
}
export type Actions = ShowAction | HideAction | DestroyAction;
