import {
  ADD_CLIENT, EDIT_CLIENT, REMOVE_CLIENT, ADD_ACCOUNT,
  EDIT_ACCOUNT, REMOVE_ACCOUNT,
  CHANGE_DRAWER_OPEN_STATE
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


// Drawer

export const changeDrawerOpenState = drawerOpenState => ({
  type: CHANGE_DRAWER_OPEN_STATE,
  payload: {
    drawerOpenState
  }
});
