import {combineReducers} from "redux";
import clients from "./clients";
import accounts from "./accounts";
import modals from "./modals";
import grids from "./grids";

export default combineReducers({clients, accounts, modals, grids});
