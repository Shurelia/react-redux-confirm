import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { ApplicationState, selectConfirmModalState } from './selectors';
import { ConfirmState, ConfirmInjectedProps } from './types';
import { hide } from './actions';

export function confirmModal<OwnProps = {}>(
  PassedComponent:
    | React.ComponentClass<OwnProps>
    | React.StatelessComponent<OwnProps>
) {
  const WrappedComponent = (props: ConfirmInjectedProps & OwnProps) => {
    return <PassedComponent {...props} />;
  };
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
