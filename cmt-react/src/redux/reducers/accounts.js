import {ADD_ACCOUNT, EDIT_ACCOUNT, REMOVE_ACCOUNT} from "../actions/actionTypes";


const initialState = {
  accounts: ['test']
};


export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACCOUNT: {

      console.log(action);

      return [
        ...state.accounts,
        action.payload
      ];
    }
    case EDIT_ACCOUNT: {

      console.log(action);


      return {};
    }
    case REMOVE_ACCOUNT: {
      console.log(action);
      return {}
    }
    default:
      return state;
  }
}
