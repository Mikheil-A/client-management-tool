import {ADD_CLIENT, EDIT_CLIENT, REMOVE_CLIENT} from "../actions/actionTypes";


const initialState = {
  client: {}
};


export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLIENT: {

      console.log(action);

      return {};
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
