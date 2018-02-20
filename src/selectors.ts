import { ConfirmState } from "./reducers";

export interface ApplicationState {
  confirmModal: ConfirmState;
  [key: string]: any;
}

export const selectConfirmModalState = (state: ApplicationState) => state.confirmModal