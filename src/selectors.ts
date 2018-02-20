import { ConfirmState } from './types';

export interface ApplicationState {
  confirmModal: ConfirmState;
  [key: string]: any;
}

export const selectConfirmModalState = (state: ApplicationState) =>
  state.confirmModal;
