import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { ApplicationState, selectConfirmModalState } from './selectors';
import { ConfirmInjectedProps } from './types';
import { ConfirmActions } from './actions';

export function confirmModal<T extends {}>(
  PassedComponent: React.ComponentType<T & ConfirmInjectedProps>
) {
  type MergedProps = T & ConfirmInjectedProps;
  class WrappedComponent extends React.Component<MergedProps> {
    render() {
      return <PassedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state: ApplicationState): ConfirmInjectedProps => {
    return selectConfirmModalState(state);
  };

  const mapDispatchToProps = (
    dispatch: Dispatch<ApplicationState>
  ): ConfirmModalActions => {
    return {
      hide: () => dispatch(ConfirmActions.hide())
    };
  };

  const mergeProps = (
    fields: ConfirmInjectedProps,
    actions: ConfirmModalActions,
    ownProps: any
  ): MergedProps => {
    return {
      ...(ownProps as any),
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

  return connect<
    ConfirmInjectedProps,
    ConfirmModalActions,
    T,
    MergedProps,
    ApplicationState
  >(mapStateToProps, mapDispatchToProps, mergeProps)(WrappedComponent);
}

interface ConfirmModalActions {
  hide: () => void;
}
