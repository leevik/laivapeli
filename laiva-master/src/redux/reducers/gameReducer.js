import {
  TOGGLE_TURN,
  SET_PLAYER_NAMES,
  GAME_OVER,
} from "../actions/gameActions";

//hostTurn on siis pelaaja 1.
//Jatka: https://redux.js.org/tutorials/fundamentals/part-4-store
const initialState = {
  gameOver: false,
  hostTurn: true,
  playerOneName: "",
  playerTwoName: "",
};

//SISÄLTÄÄ VAIN PLACEHOLDEREITA TOIMIVUUDEN TESTAAMISEEN

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TURN:
      return {
        ...state,
        hostTurn: !state.hostTurn,
      };
    case SET_PLAYER_NAMES:
      return {
        ...state,
        playerOneName: action.payload.playerOne,
        playerTwoName: action.payload.playerTwo,
      };
    case GAME_OVER:
      return {
        ...state,
        gameOver: !state.gameOver,
      };
    default:
      return state;
  }
};

export default gameReducer;
