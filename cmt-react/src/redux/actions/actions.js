import {
  ADD_CLIENT, EDIT_CLIENT, REMOVE_CLIENT, ADD_ACCOUNT,
  EDIT_ACCOUNT, REMOVE_ACCOUNT,
  DRAWER_OPEN_STATE_CHANGE
} from "./actionTypes";


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

export const drawerOpenStateChange = drawerOpenState => ({
  type: DRAWER_OPEN_STATE_CHANGE,
  payload: {
    drawerOpenState
  }
});
