import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { ApplicationState, selectConfirmModalState } from './selectors';
import { ConfirmState } from './reducers';
import { hide } from './actions';

export function confirmModal<OwnProps = {}>(
  PassedComponent: React.ComponentClass<OwnProps>
) {
  type ConfirmModalProps = ConfirmInjectedProps & OwnProps;
  class WrappedComponent extends React.Component<ConfirmModalProps> {
    render() {
      return <PassedComponent {...this.props} />;
    }
  }
  return connect(mapStateToProps, mapDispatchToProps, mergeProps)(
    WrappedComponent
  );
}

type ConfirmModalFields = ConfirmState;
const mapStateToProps = (state: ApplicationState): ConfirmModalFields => {
  return selectConfirmModalState(state);
};

interface ConfirmModalActions {
  hide: () => void;
}
const mapDispatchToProps = (
  dispatch: Dispatch<ApplicationState>
): ConfirmModalActions => {
  return {
    hide: () => dispatch(hide())
  };
};

export type ConfirmInjectedProps = ConfirmState;
const mergeProps = (
  fields: ConfirmModalFields,
  actions: ConfirmModalActions
): ConfirmInjectedProps => {
  return {
    ...fields,
    onCancel: () => {
      fields.onCancel();
      actions.hide();
    },
    onConfirm: () => {
      fields.onConfirm();
      actions.hide();
    }
  };
};
