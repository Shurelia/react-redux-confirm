import {
  ShowActionPayload,
  ShowAction,
  HideAction,
  ConfirmActionTypes
} from './types';

export const ConfirmActions: ActionObject = {
  confirm: payload => {
    return {
      type: ConfirmActionTypes.SHOW,
      payload: payload
    };
  },
  hide: () => {
    return {
      type: ConfirmActionTypes.HIDE
    };
  }
};

export interface ActionObject {
  confirm: (payload: ShowActionPayload) => ShowAction;
  hide: () => HideAction;
}
