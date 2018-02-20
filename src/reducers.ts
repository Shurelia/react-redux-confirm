import { ConfirmState, Actions, ConfirmActionTypes } from './types';

const initialState = {
  onConfirm: () => {},
  onCancel: () => {},
  isOpen: false,
  message: 'Are you sure?'
};

export const reducers = (
  state: ConfirmState = initialState,
  action: Actions
): ConfirmState => {
  switch (action.type) {
    case ConfirmActionTypes.HIDE:
      return initialState;
    case ConfirmActionTypes.SHOW:
      return { ...initialState, ...action.payload, isOpen: true };
    default:
      return state;
  }
};
