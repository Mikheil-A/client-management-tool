import {DRAWER_OPEN_STATE_CHANGE} from "../actions/actionTypes";


const initialState = {
  drawerOpenState: 'tsetaeawga'
};


export default (state = initialState, action) => {
  switch (action.type) {
    case DRAWER_OPEN_STATE_CHANGE: {
      console.log('action payload', action.payload);
      return action.payload;
    }
    default:
      return state;
  }
}
