import {
  ShowActionPayload,
  ShowAction,
  HideAction,
  ConfirmActionTypes
} from './types';

export const confirm = (payload: ShowActionPayload): ShowAction => {
  return {
    type: ConfirmActionTypes.SHOW,
    payload: payload
  };
};

export const hide = (): HideAction => {
  return {
    type: ConfirmActionTypes.HIDE
  };
};
