import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//Redux importit
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  player1Hit,
  player1Shot,
  player2Hit,
  player2Shot,
} from "./redux/actions/playerBoardActions";
import { toggleTurn } from "./redux/actions/gameActions";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleTurn } from "../redux/actions/gameActions";

/**
 * Tiedostot, joihin tein muutoksia [Teemu Pirskanen, Redux, 3.12]: index.js, server.js, Layout.js, OpponentField.js
 */

//Luodaan client-puolen soketti
const io = require("socket.io-client");
const socket = io();

var soketit = {
  pelaaja1: { socket: null, taulu: null },
  pelaaja2: { socket: null, taulu: null },
};

soketit.pelaaja1.taulu = [
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
];
soketit.pelaaja2.taulu = [
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
];

// socket.on("mihinAmmuttu", (data) => {
//   //data = String(data)
//   if (socket === soketit.pelaaja1.socket) {
//     //var taulu1 = soketit.pelaaja1.taulu
//     var res = data.split(".");
//     soketit.pelaaja1.taulu[parseInt(res[0])][parseInt([res[1]])] = 1;
//     store.dispatch(player1Shot(res));
//   } else if (socket === soketit.pelaaja2.socket) {
//     //var taulu2 = soketit.pelaaja2.taulu
//     var res = data.split(".");
//     soketit.pelaaja2.taulu[parseInt(res[0])][parseInt([res[1]])] = 1;
//     store.dispatch(player2Shot(res));
//   }
// });

/**
 * TODO:
 * mihin ammuttu tarkastus, oikeat merkinnät reduxiin. - OK
 * Osututulle laivalle merkintä reduxiin - OK
 * Jokin tapa selvittää mihin laivaan osuttiin.
 */

// 0 = vettä, 1 = osuma veteen, 2 = laiva, 3 = osuma laivaan
socket.on("mihinAmmuttu", (data) => {
  //PELAAJA 1 server emitoi, että pelaaja 2 ampui pelaaja 1:stä
  if (socket === soketit.pelaaja1.socket) {
    var res = data.split(".");
    //LAIVAT ON TÄHÄN MENNESSÄ ASETELTU VASTAAVASTI KUMMANKIN PELAAJAN OMAAN TAULUUN //TOISTAISEKSI KOVAKOODATTU REDUCERIIN.
    //Tarkastetaan onko ammutussa kohdassa 2, eli laiva
    if (
      store.getState().playerboard.pelaaja1taulu[parseInt(res[0])][
        parseInt([res[1]])
      ] === 2
    ) {
      //OSUMA PÄIVITYS
      socket.emit("osuma", data);
      store.dispatch(player1Hit(res));
    } else {
      //HUTI PÄIVITYS
      store.dispatch(player1Shot(res));
    }
  }
  //PELAAJA 2 server emitoi, että pelaaja 1 ampui pelaaja 2:stä
  else if (socket === soketit.pelaaja2.socket) {
    var res = data.split(".");

    //Tarkastetaan onko ammutussa kohdassa 2, eli laiva //Tämä on todennäköisesti aika huono tapa selvittää tila storesta, mutta muuta tapaa en keksi, jota hyödyntää index.jssä
    if (
      store.getState().playerboard.pelaaja2taulu[parseInt(res[0])][
        parseInt([res[1]])
      ] === 2
    ) {
      socket.emit("osuma", data);
      //OSUMA PÄIVITYS
      store.dispatch(player2Hit(res));
    } else {
      //HUTI PÄIVITYS
      store.dispatch(player2Shot(res));
    }
  }
});

//Vaihtaa vuoron kutsuttaessa. Toistaiseksi sitä kutsutaan ehtojen täytyttyä serverin puolelta kahdesti, kerran kummallekkin pelaajalle.
socket.on("vuoronvaihto", () => {
  store.dispatch(toggleTurn());
});

socket.on("viesti", (viesti) => {
  console.log(viesti);
});

socket.on("pelaajaID", (data) => {
  if (data === 1) {
    soketit.pelaaja1.socket = socket;
  } else if (data === 2) {
    soketit.pelaaja2.socket = socket;
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//Exportataan soketti, jotta sitä voidaan käyttää muissa tiedostoissa. 25.11
export default socket;
