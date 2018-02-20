import { ConfirmInjectedProps } from './types';

export type ConfirmState = ConfirmInjectedProps;

export interface ApplicationState {
  confirmModal: ConfirmState;
  [key: string]: any;
}

export const selectConfirmModalState = (state: ApplicationState) =>
  state.confirmModal;
