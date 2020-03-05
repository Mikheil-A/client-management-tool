import {
  ADD_CLIENT, EDIT_CLIENT, REMOVE_CLIENT,
  ADD_ACCOUNT, EDIT_ACCOUNT, REMOVE_ACCOUNT,
  CHANGE_DRAWER_OPEN_STATE, CHANGE_DIALOG_OPEN_STATE,
  CHANGE_CLIENTS_GRID_STATE,
  SHOULD_UPDATE_CLIENT_ACCOUNTS_DRAWER
} from "./actionTypes";


// Client

export const addClient = data => ({
  type: ADD_CLIENT,
  payload: {
    data
  }
});

export const editClient = data => ({
  type: EDIT_CLIENT,
  payload: {
    data
  }
});

export const removeClient = id => ({
  type: REMOVE_CLIENT,
  payload: {
    id
  }
});


// Account

export const addAccount = data => ({
  type: ADD_ACCOUNT,
  payload: {
    data
  }
});

export const editAccount = data => ({
  type: EDIT_ACCOUNT,
  payload: {
    data
  }
});

export const removeAccount = id => ({
  type: REMOVE_ACCOUNT,
  payload: {
    id
  }
});


// Modals

export const changeDrawerOpenState = drawerOpenState => ({
  type: CHANGE_DRAWER_OPEN_STATE,
  payload: {
    drawerOpenState
  }
});

export const changeDialogOpenState = dialogOpenState => ({
  type: CHANGE_DIALOG_OPEN_STATE,
  payload: {
    dialogOpenState
  }
});


// Grids

export const changeClientsGridState = gridState => ({
  type: CHANGE_CLIENTS_GRID_STATE,
  payload: {
    gridState
  }
});


// Others

export const shouldUpdateClientAccountsDrawer = shouldUpdate => ({
  type: SHOULD_UPDATE_CLIENT_ACCOUNTS_DRAWER,
  payload: {
    shouldUpdate
  }
});
