import {CHANGE_DRAWER_OPEN_STATE} from "../actions/actionTypes";


const initialState = {
  drawerOpenState: false,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DRAWER_OPEN_STATE: {
      return action.payload;
    }
    default:
      return state;
  }
}
