import {
  PLACE_SHIP,
  PLAYER1_SHOT,
  PLAYER2_SHOT,
  CELL_SHOT,
  PLAYER1_HIT,
  PLAYER2_HIT,
} from "../actions/playerBoardActions";

//TÄMÄ REDUCER HALLITSEE PELAAJANLAUDAN TAPAHTUMIA
//Pelaaja 1 taulu on tarkoitettu pitämään kirjaa pelaajan 1 laivoista. Laudan merkinnät ovat: 0 = vettä, 1 = osuma veteen, 2 = laiva, 3 = osuma laivaan. Niitä päivitetään pelaajan 2 osumien mukaan.
//Pelaaja 2 taulu on tarkoitettu pitämään kirjaa pelaajan 2 laivoista. Laudan merkinnät ovat: 0 = vettä, 1 = osuma veteen, 2 = laiva, 3 = osuma laivaan. Niitä päivitetään pelaajan 1 osumien mukaan.
//Ampumataulua päivitetään pelaajan päässä ja siihen kirjataan vain jo ammutut ruudut --> Hyödynnetään kun halutaan estää pelaajaa ampumasta samaan ruutuun uudelleen.

//MUISTA POISTAA KOVAKOODATUT LAIVAT

const initialState = {
  pelaaja1taulu: [
    [2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  pelaaja2taulu: [
    [2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  ampumataulu: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],

  ships: [
    { shipId: 1, name: "Aircraft Carrier", lenght: 5, hp: 5, coordinates: [] },
    { shipId: 2, name: "Battleship", lenght: 4, hp: 4, coordinates: [] },
    { shipId: 3, name: "Submarine", lenght: 3, hp: 3, coordinates: [] },
    { shipId: 4, name: "Destroyer", lenght: 3, hp: 3, coordinates: [] },
    { shipId: 5, name: "Patrol Boat", lenght: 2, hp: 2, coordinates: [] },
  ],
  shipsPlaced: 0,
};

//Tässä olevat caset toimii sellaisenaa, mutta ne pitää yhdistää fronttiin

const playerBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_SHIP:
      return {
        ...state,
        shipsPlaced: state.shipsPlaced + 1,
        ships: state.ships.map((ship) => {
          if (ship.shipId !== action.payload.shipId) {
            return ship;
          }
          return {
            ...ship,
            coordinates: action.payload.coordinates,
          };
        }),
      };
    case PLAYER1_SHOT:
      return {
        ...state,
        pelaaja1taulu: {
          ...state.pelaaja1taulu,
          [action.payload.xy[0]]: {
            ...state.pelaaja1taulu[action.payload.xy[0]],
            [action.payload.xy[1]]: 1,
          },
        },
      };
    case PLAYER1_HIT:
      return {
        ...state,
        pelaaja1taulu: {
          ...state.pelaaja1taulu,
          [action.payload.xy[0]]: {
            ...state.pelaaja1taulu[action.payload.xy[0]],
            [action.payload.xy[1]]: 3,
          },
        },
      };

    case PLAYER2_SHOT:
      return {
        ...state,
        pelaaja2taulu: {
          ...state.pelaaja2taulu,
          [action.payload.xy[0]]: {
            ...state.pelaaja2taulu[action.payload.xy[0]],
            [action.payload.xy[1]]: 1,
          },
        },
      };
    case PLAYER2_HIT:
      return {
        ...state,
        pelaaja2taulu: {
          ...state.pelaaja1taulu,
          [action.payload.xy[0]]: {
            ...state.pelaaja2taulu[action.payload.xy[0]],
            [action.payload.xy[1]]: 3,
          },
        },
      };
    case CELL_SHOT:
      return {
        ...state,
        ampumataulu: {
          ...state.ampumataulu,
          [action.payload.xy[0]]: {
            ...state.ampumataulu[action.payload.xy[0]],
            [action.payload.xy[1]]: 1,
          },
        },
      };

    default:
      return state;
  }
};

export default playerBoardReducer;
