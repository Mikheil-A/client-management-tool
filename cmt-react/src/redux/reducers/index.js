import {combineReducers} from "redux";
import clients from "./clients";
import accounts from "./accounts";
import modals from "./modals";

export default combineReducers({clients, accounts, modals});
