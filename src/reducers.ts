import { ConfirmInjectedProps, Actions, ConfirmActionTypes } from './types';

export type ConfirmState = ConfirmInjectedProps;

const initialState: ConfirmState = {
  onConfirm: () => {},
  onCancel: () => {},
  isOpen: false,
  message: 'Are you sure?',
  willBeDestroyed: false
};

export const reducers = (
  state: ConfirmState = initialState,
  action: Actions
): ConfirmState => {
  switch (action.type) {
    case ConfirmActionTypes.HIDE:
      return { ...state, isOpen: false, willBeDestroyed: true };
    case ConfirmActionTypes.DESTROY:
      return initialState;
    case ConfirmActionTypes.SHOW:
      return state.willBeDestroyed
        ? state
        : { ...initialState, ...action.payload, isOpen: true };
    default:
      return state;
  }
};
