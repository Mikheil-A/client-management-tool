import {CHANGE_DRAWER_OPEN_STATE, CHANGE_DIALOG_OPEN_STATE} from "../actions/actionTypes";


const initialState = {
  drawerOpenState: false,
  dialogOpenState: false
};


export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DRAWER_OPEN_STATE: {
      console.log(action.payload);
      return {
        ...state,
        drawerOpenState: action.payload.drawerOpenState
      };
    }
    case CHANGE_DIALOG_OPEN_STATE: {
      return {
        ...state,
        dialogOpenState: action.payload.dialogOpenState
      };
    }
    default:
      return state;
  }
}
