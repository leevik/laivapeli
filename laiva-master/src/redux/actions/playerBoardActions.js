//Action types // Nimet kutakuinkin sellaisia kuin tarvii, mutta toiminnallisuus ei tule olemaan vielä kunnollinen
export const PLACE_SHIP = "PLACE_SHIP";
export const PLAYER1_SHOT = "PLAYER1_SHOT";
export const PLAYER1_HIT = "PLAYER1_HIT";
export const PLAYER2_SHOT = "PLAYER2_SHOT";
export const PLAYER2_HIT = "PLAYER2_HIT";
export const CELL_SHOT = "CELL_SHOT";

//Action creator, joita kutsutaan kun halutaan muokata tiloja.
export const placeShip = (coordinates, shipId) => ({
  type: PLACE_SHIP,
  payload: {
    coordinates,
    shipId,
  },
});
//Pelaajaa 1 ammuttu (Eli pelaaja 2 ampui pelaajaa 1)
export const player1Shot = (xy) => ({
  type: PLAYER1_SHOT,
  payload: {
    xy,
  },
});

//Pelaajaan 1 osuttu
export const player1Hit = (xy) => ({
  type: PLAYER1_HIT,
  payload: {
    xy,
  },
});

//Pelaajaa 2 ammuttu (Eli pelaaja 1 ampui pelaajaa 2)
export const player2Shot = (xy) => ({
  type: PLAYER2_SHOT,
  payload: {
    xy,
  },
});

//Pelaajaan 2 osuttu
export const player2Hit = (xy) => ({
  type: PLAYER2_HIT,
  payload: {
    xy,
  },
});

//Ammutun ruudun muistaminen
export const cellShot = (xy) => ({
  type: CELL_SHOT,
  payload: {
    xy,
  },
});
