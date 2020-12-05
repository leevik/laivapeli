import playerBoardReducer from "./playerBoardReducer";
import gameReducer from "./gameReducer";
//import shipsReducer from "./shipsReducer"; Yhdistetty playerboardin kanssa
import { combineReducers } from "redux";

//Tänne lisätään kaikki reducerit ja yhdistetään ne yhdeksi.
/**
 * Remember, the key names you give to combineReducers decides what the key names of your state object will be!
 */

const rootReducer = combineReducers({
  playerboard: playerBoardReducer,
  game: gameReducer,
});

export default rootReducer;
