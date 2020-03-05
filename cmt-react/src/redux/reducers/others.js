import {SHOULD_UPDATE_CLIENT_ACCOUNTS_DRAWER} from "../actions/actionTypes";


const initialState = {
  shouldUpdate: false
};


export default (state = initialState, action) => {
  switch (action.type) {
    case SHOULD_UPDATE_CLIENT_ACCOUNTS_DRAWER: {
      return {
        ...state,
        shouldUpdate: action.payload.shouldUpdate
      };
    }
    default:
      return state;
  }
}
