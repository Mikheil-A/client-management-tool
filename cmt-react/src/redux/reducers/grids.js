import {CHANGE_CLIENTS_GRID_STATE} from "../actions/actionTypes";


const initialState = {
  shouldClientsGridUpdate: false
};


export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CLIENTS_GRID_STATE: {
      return {
        ...state,
        shouldClientsGridUpdate: action.payload.gridState
      };
    }
    default:
      return state;
  }
}
