import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { ApplicationState, selectConfirmModalState } from './selectors';
import { ConfirmInjectedProps, ConfirmState } from './types';
import { ConfirmActions } from './actions';

export function withConfirm<T extends {}>(
  PassedComponent: React.ComponentType<T & ConfirmInjectedProps>
) {
  type MergedProps = T & ConfirmInjectedProps;
  class WrappedComponent extends React.Component<MergedProps> {
    destroyTimeout: number = 0;

    componentWillReceiveProps(nextProps: MergedProps) {
      if (!this.props.willBeDestroyed && nextProps.willBeDestroyed) {
        this.destroyTimeout = window.setTimeout(
          () => this.props.destroy(),
          1000
        );
      }

      if (!this.props.isOpen && nextProps.isOpen) {
        window.clearTimeout(this.destroyTimeout);
      }
    }

    render() {
      return this.props.isOpen || this.props.willBeDestroyed ? (
        <PassedComponent {...this.props} />
      ) : null;
    }
  }

  const mapStateToProps = (state: ApplicationState): ConfirmState => {
    return selectConfirmModalState(state);
  };

  const mapDispatchToProps = (
    dispatch: Dispatch<ApplicationState>
  ): ConfirmModalActions => {
    return {
      hide: () => dispatch(ConfirmActions.hide()),
      destroy: () => dispatch(ConfirmActions.destroy())
    };
  };

  const mergeProps = (
    fields: ConfirmState,
    actions: ConfirmModalActions,
    ownProps: T
  ): MergedProps => {
    return {
      ...(ownProps as any),
      ...fields,
      ...actions,
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
    ConfirmState,
    ConfirmModalActions,
    T,
    MergedProps,
    ApplicationState
  >(mapStateToProps, mapDispatchToProps, mergeProps)(WrappedComponent);
}

interface ConfirmModalActions {
  hide: () => void;
  destroy: () => void;
}
