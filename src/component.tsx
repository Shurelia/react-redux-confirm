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
      return this.props.isOpen || this.props.willBeDestroyed ? (
        <PassedComponent {...this.props} />
      ) : null;
    }
  }

  const mapStateToProps = (state: ApplicationState): ConfirmInjectedProps => {
    return selectConfirmModalState(state);
  };

  const mapDispatchToProps = (
    dispatch: Dispatch<ApplicationState>
  ): ConfirmModalActions => {
    return {
      dismiss: (destroyTimeout = 1000) => {
        dispatch(ConfirmActions.hide());
        window.setTimeout(
          () => dispatch(ConfirmActions.destroy()),
          destroyTimeout
        );
      }
    };
  };

  const mergeProps = (
    fields: ConfirmInjectedProps,
    actions: ConfirmModalActions,
    ownProps: T
  ): MergedProps => {
    return {
      ...(ownProps as any),
      ...fields,
      onCancel: () => {
        fields.onCancel();
        actions.dismiss();
      },
      onConfirm: () => {
        fields.onConfirm();
        actions.dismiss();
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
  dismiss: (destroyTimeout?: number) => void;
}
