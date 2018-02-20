import { Actions, ConfirmActionTypes } from './actions';

export interface ConfirmState {
  onConfirm: () => any;
  onCancel: () => any;
  isOpen: boolean;
  content: string;
  options?: { [key: string]: any };
}

const initialState = {
  onConfirm: () => {},
  onCancel: () => {},
  isOpen: false,
  content: 'Are you sure?'
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
