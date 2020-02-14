import {combineReducers} from "redux";
import clients from "./clients";
import accounts from "./accounts";
import drawer from "./drawer";

export default combineReducers({clients, accounts, drawer});
