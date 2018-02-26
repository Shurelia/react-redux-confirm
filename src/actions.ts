import {
  ShowActionPayload,
  ShowAction,
  HideAction,
  DestroyAction,
  ConfirmActionTypes
} from './types';

export const ConfirmActions: ConfirmActionsObject = {
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
  },
  destroy: () => {
    return {
      type: ConfirmActionTypes.DESTROY
    };
  }
};

export interface ConfirmActionsObject {
  confirm: (payload: ShowActionPayload) => ShowAction;
  hide: () => HideAction;
  destroy: () => DestroyAction;
}
