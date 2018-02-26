# react-redux-confirm

Small library for managing re-usable confirm dialog state. This does not provide any kind of view component, it provides a HOC that lets you use your own modal.

## Installation / Setup

* First, install with `npm i react-redux-confirm`.
* In your root reducer, import `confirmReducers` and add it to the `confirmModal` key. (Currently, this is not configurable.)
* Create your modal component. `react-redux-confirm` will inject the following props into that modal component for you to use:
  * `onConfirm: () => any` - Call this when the user confirms the action (e.g. clicks 'Submit')
  * `onCancel: () => any` - Call this when the user cancels the action (e.g. clicks cancel or navigates away)
  * `isOpen: boolean` - Whether or not the modal is open.
  * `message: ReactNode` - The content to be displayed.
  * `options?: any` - Any further custom options you passed through to the action creator.
    Note that in the case of `onConfirm` and `onCancel`, you do not need to handle closing the modal. `isOpen` will be set to false automatically.
* Import the HOC function `withConfirm`, and pass your modal view component to it: `const ConfirmModal = withConfirm(MyModal)`.
  * If you'd like to connect this component, put the HOC inside the connect function: `const ConfirmModal = connect(mapStateToProps)(withConfirm(MyModal))`
* Put the resulting component `ConfirmModal` wherever makes sense in your application.

## Usage

Anywhere you'd like to make sure the user really means it, import `ConfirmActions` and dispatch `ConfirmActions.confirm(options)`.  
`options` is an object with the following shape:

```
{
  onConfirm?: () => any,
  onCancel?: () => any,
  message?: ReactNode,
  options?: any
}
```

If you'd like to hide the modal with an action, you may dispatch `ConfirmActions.hide()`. Similarly, if you'd like to unmount the modal view component, dispatch `ConfirmActions.destroy()`. You shouldn't need to use these in most cases.

## Typescript

This package was written in Typescript and provides typings. `ConfirmInjectedProps` is an interface containing the props injected by the HOC for use by your view component.

## Todo

* Add an option to configure the delay with which the modal is automatically destroyed
