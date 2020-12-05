//Vaihdetaan vuoroa, kun toinen pelaaja on suorittanut vuoronsa
export const TOGGLE_TURN = "TOGGLE_TURN";
//Pelaajien nimien asetukseen. //Mahdollisesti tehdä kummallekkin oma?//Toistaiseksi turha
export const SET_PLAYER_NAMES = "SET_PLAYER_NAMES";
export const GAME_OVER = "GAME_OVER";

//Action creators
export const toggleTurn = () => ({
  type: TOGGLE_TURN,
});

export const setPlayerNames = (playerOne, playerTwo) => ({
  type: SET_PLAYER_NAMES,
  payload: {
    playerOne,
    playerTwo,
  },
});

export const gameOver = () => ({
  type: GAME_OVER,
});
