import {combineReducers} from "redux";
import clients from "./clients";
import accounts from "./accounts";
import modals from "./modals";
import grids from "./grids";
import others from "./others";

export default combineReducers({clients, accounts, modals, grids, others});
