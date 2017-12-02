// @flow
import config from "kit/config";
import { combineReducers } from "redux";
import { merge } from "src/lib/redux";

import achievements from "./achievements";
import ui from "./ui";
import state from "./state";

let gameReducer = combineReducers({ achievements, ui, state });
config.addReducer("game", gameReducer);

export default gameReducer;
