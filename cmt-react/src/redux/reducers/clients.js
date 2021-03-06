import {ADD_CLIENT, EDIT_CLIENT, REMOVE_CLIENT} from "../actions/actionTypes";


const initialState = {
  clients: []
};


export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLIENT: {
      return [
        // ...state.clients,
        ...action.payload.data.data
      ];
    }
    case EDIT_CLIENT: {
      console.log(action);
      return {};
    }
    case REMOVE_CLIENT: {
      console.log(action);
      return {}
    }
    default:
      return state;
  }
}
