export enum ConfirmActionTypes {
  SHOW = '@react-redux-confirm/show',
  HIDE = '@react-redux-confirm/hide'
}

export interface ShowActionPayload {
  onConfirm: () => any;
  onCancel?: () => any;
  message?: string;
  options?: { [key: string]: any };
}
export interface ShowAction {
  type: ConfirmActionTypes.SHOW;
  payload: ShowActionPayload;
}
export const confirm = (payload: ShowActionPayload): ShowAction => {
  return {
    type: ConfirmActionTypes.SHOW,
    payload: payload
  };
};

export interface HideAction {
  type: ConfirmActionTypes.HIDE;
}
export const hide = (): HideAction => {
  return {
    type: ConfirmActionTypes.HIDE
  };
};

export type Actions = ShowAction | HideAction;
