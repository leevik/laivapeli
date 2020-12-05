import styles from "../../src/Style.module.css";
import React from "react";

//Redux importteja
import { useSelector, useDispatch } from "react-redux";

//Tuodaan client soketti index.js:stä. 25.11
import socket from "../../src/index.js";
import { cellShot } from "../redux/actions/playerBoardActions";
import soketit from "../index";

export default function OpponentField() {
  const vuoroState = (state) => state.game.hostTurn;
  const vuoro = useSelector(vuoroState);
  //Funktio lisätty, jolla lähetetään tieto ammutusta kohdasta serverille. Lisätty myös onclick tapahtumat soluihin. 25.11
  //TÄHÄN TARKISTUS ONKO PELAAJAN OMA VUORO AMPUA
  // function ammuttuKohta(num) {
  //   socket.emit("ammus", num, vuoro);
  // }

  //Testiä
  const ampumaTauluState = (state) => state.playerboard.ampumataulu;
  const ampumataulu = useSelector(ampumaTauluState);
  const dispatch = useDispatch();

  //Saadessaan koordinaatin, tarkastaa onko siihen klikattu aikaisemmin, jos on niin ilmoitetaan pelaajalle. ILMOITUS RUUDULLE
  //SEKOAA JOS PELAAJA 2 KLIKKAA RUUTUA KUN EI OLE OMA VUORO --> MERKINTÄ MENEE AMPUMATAULUUN, MIKÄ ESTÄÄ JATKOSSA AMPUMISEN SIIHEN RUUTUUN.
  function ammuttuKohta(num) {
    var coord = num.split(".");
    if (ampumataulu[parseInt(coord[0])][parseInt([coord[1]])] === 0) {
      ampumataulu[parseInt(coord[0])][parseInt([coord[1]])] = 1;
      dispatch(cellShot(coord));
      socket.emit("ammus", num, vuoro);
    } else console.log("Ruutuun [" + num + "] on jo ammuttu!");
  }

  return (
    /**OpponentField - tarkoitettu vihollisen kentäksi, mihin pelaaja klikkailee ja mihin tulee räjähdykset ja missed kuvakkeet. */
    <div>
      <table className={styles.table}>
        <tr className={styles.tr}>
          {" "}
          {/*rivi 1*/}
          <td
            onClick={() => {
              ammuttuKohta("0.0");
            }}
            className={styles.td}
            id={1.1}
          >
            1
          </td>{" "}
          {/*solu*/}
          <td
            onClick={() => {
              ammuttuKohta("0.1");
            }}
            className={styles.td}
            id={1.2}
          >
            2
          </td>
          <td
            onClick={() => {
              ammuttuKohta("0.2");
            }}
            className={styles.td}
            id={1.3}
          >
            3
          </td>
          <td
            onClick={() => {
              ammuttuKohta("0.3");
            }}
            className={styles.td}
            id={1.4}
          >
            {" "}
            4
          </td>
          <td
            onClick={() => {
              ammuttuKohta("0.4");
            }}
            className={styles.td}
            id={1.5}
          >
            5
          </td>
          <td
            onClick={() => {
              ammuttuKohta("0.5");
            }}
            className={styles.td}
            id={1.6}
          >
            6
          </td>
          <td
            onClick={() => {
              ammuttuKohta("0.6");
            }}
            className={styles.td}
            id={1.7}
          >
            7
          </td>
          <td
            onClick={() => {
              ammuttuKohta("0.7");
            }}
            className={styles.td}
            id={1.8}
          >
            8
          </td>
          <td
            onClick={() => {
              ammuttuKohta("0.8");
            }}
            className={styles.td}
            id={1.9}
          >
            9
          </td>
          <td
            onClick={() => {
              ammuttuKohta("0.9");
            }}
            className={styles.td}
            id={1.1}
          >
            10
          </td>
        </tr>

        <tr className={styles.tr}>
          {" "}
          {/*rivi 2*/}
          <td
            onClick={() => {
              ammuttuKohta("1.0");
            }}
            className={styles.td}
            id={2.1}
          >
            1
          </td>{" "}
          {/*solu*/}
          <td
            onClick={() => {
              ammuttuKohta("1.1");
            }}
            className={styles.td}
            id={2.2}
          >
            2
          </td>
          <td
            onClick={() => {
              ammuttuKohta("1.2");
            }}
            className={styles.td}
            id={2.3}
          >
            3
          </td>
          <td
            onClick={() => {
              ammuttuKohta("1.3");
            }}
            className={styles.td}
            id={2.4}
          >
            {" "}
            4
          </td>
          <td
            onClick={() => {
              ammuttuKohta("1.4");
            }}
            className={styles.td}
            id={2.5}
          >
            5
          </td>
          <td
            onClick={() => {
              ammuttuKohta("1.5");
            }}
            className={styles.td}
            id={2.6}
          >
            6
          </td>
          <td
            onClick={() => {
              ammuttuKohta("1.6");
            }}
            className={styles.td}
            id={2.7}
          >
            7
          </td>
          <td
            onClick={() => {
              ammuttuKohta("1.7");
            }}
            className={styles.td}
            id={2.8}
          >
            8
          </td>
          <td
            onClick={() => {
              ammuttuKohta("1.8");
            }}
            className={styles.td}
            id={2.9}
          >
            9
          </td>
          <td
            onClick={() => {
              ammuttuKohta("1.9");
            }}
            className={styles.td}
            id={2.1}
          >
            10
          </td>
        </tr>

        <tr className={styles.tr}>
          {" "}
          {/*rivi 3*/}
          <td
            onClick={() => {
              ammuttuKohta("2.0");
            }}
            className={styles.td}
            id={3.1}
          >
            1
          </td>{" "}
          {/*solu*/}
          <td
            onClick={() => {
              ammuttuKohta("2.1");
            }}
            className={styles.td}
            id={3.2}
          >
            2
          </td>
          <td
            onClick={() => {
              ammuttuKohta("2.2");
            }}
            className={styles.td}
            id={3.3}
          >
            3
          </td>
          <td
            onClick={() => {
              ammuttuKohta("2.3");
            }}
            className={styles.td}
            id={3.4}
          >
            {" "}
            4
          </td>
          <td
            onClick={() => {
              ammuttuKohta("2.4");
            }}
            className={styles.td}
            id={3.5}
          >
            5
          </td>
          <td
            onClick={() => {
              ammuttuKohta("2.5");
            }}
            className={styles.td}
            id={3.6}
          >
            6
          </td>
          <td
            onClick={() => {
              ammuttuKohta("2.6");
            }}
            className={styles.td}
            id={3.7}
          >
            7
          </td>
          <td
            onClick={() => {
              ammuttuKohta("2.7");
            }}
            className={styles.td}
            id={3.8}
          >
            8
          </td>
          <td
            onClick={() => {
              ammuttuKohta("2.8");
            }}
            className={styles.td}
            id={3.9}
          >
            9
          </td>
          <td
            onClick={() => {
              ammuttuKohta("2.9");
            }}
            className={styles.td}
            id={3.1}
          >
            10
          </td>
        </tr>

        <tr className={styles.tr}>
          {" "}
          {/*rivi 4*/}
          <td
            onClick={() => {
              ammuttuKohta("3.0");
            }}
            className={styles.td}
            id={4.1}
          >
            1
          </td>{" "}
          {/*solu*/}
          <td
            onClick={() => {
              ammuttuKohta("3.1");
            }}
            className={styles.td}
            id={4.2}
          >
            2
          </td>
          <td
            onClick={() => {
              ammuttuKohta("3.2");
            }}
            className={styles.td}
            id={4.3}
          >
            3
          </td>
          <td
            onClick={() => {
              ammuttuKohta("3.3");
            }}
            className={styles.td}
            id={4.4}
          >
            {" "}
            4
          </td>
          <td
            onClick={() => {
              ammuttuKohta("3.4");
            }}
            className={styles.td}
            id={4.5}
          >
            5
          </td>
          <td
            onClick={() => {
              ammuttuKohta("3.5");
            }}
            className={styles.td}
            id={4.6}
          >
            6
          </td>
          <td
            onClick={() => {
              ammuttuKohta("3.6");
            }}
            className={styles.td}
            id={4.7}
          >
            7
          </td>
          <td
            onClick={() => {
              ammuttuKohta("3.7");
            }}
            className={styles.td}
            id={4.8}
          >
            8
          </td>
          <td
            onClick={() => {
              ammuttuKohta("3.8");
            }}
            className={styles.td}
            id={4.9}
          >
            9
          </td>
          <td
            onClick={() => {
              ammuttuKohta("3.9");
            }}
            className={styles.td}
            id={4.1}
          >
            10
          </td>
        </tr>

        <tr className={styles.tr}>
          {" "}
          {/*rivi 5*/}
          <td
            onClick={() => {
              ammuttuKohta("4.0");
            }}
            className={styles.td}
            id={5.1}
          >
            1
          </td>{" "}
          {/*solu*/}
          <td
            onClick={() => {
              ammuttuKohta("4.1");
            }}
            className={styles.td}
            id={5.2}
          >
            2
          </td>
          <td
            onClick={() => {
              ammuttuKohta("4.2");
            }}
            className={styles.td}
            id={5.3}
          >
            3
          </td>
          <td
            onClick={() => {
              ammuttuKohta("4.3");
            }}
            className={styles.td}
            id={5.4}
          >
            {" "}
            4
          </td>
          <td
            onClick={() => {
              ammuttuKohta("4.4");
            }}
            className={styles.td}
            id={5.5}
          >
            5
          </td>
          <td
            onClick={() => {
              ammuttuKohta("4.5");
            }}
            className={styles.td}
            id={5.6}
          >
            6
          </td>
          <td
            onClick={() => {
              ammuttuKohta("4.6");
            }}
            className={styles.td}
            id={5.7}
          >
            7
          </td>
          <td
            onClick={() => {
              ammuttuKohta("4.7");
            }}
            className={styles.td}
            id={5.8}
          >
            8
          </td>
          <td
            onClick={() => {
              ammuttuKohta("4.8");
            }}
            className={styles.td}
            id={5.9}
          >
            9
          </td>
          <td
            onClick={() => {
              ammuttuKohta("4.9");
            }}
            className={styles.td}
            id={5.1}
          >
            10
          </td>
        </tr>

        <tr className={styles.tr}>
          {" "}
          {/*rivi 6*/}
          <td
            onClick={() => {
              ammuttuKohta("5.0");
            }}
            className={styles.td}
            id={6.1}
          >
            1
          </td>{" "}
          {/*solu*/}
          <td
            onClick={() => {
              ammuttuKohta("5.1");
            }}
            className={styles.td}
            id={6.2}
          >
            2
          </td>
          <td
            onClick={() => {
              ammuttuKohta("5.2");
            }}
            className={styles.td}
            id={6.3}
          >
            3
          </td>
          <td
            onClick={() => {
              ammuttuKohta("5.3");
            }}
            className={styles.td}
            id={6.4}
          >
            {" "}
            4
          </td>
          <td
            onClick={() => {
              ammuttuKohta("5.4");
            }}
            className={styles.td}
            id={6.5}
          >
            5
          </td>
          <td
            onClick={() => {
              ammuttuKohta("5.5");
            }}
            className={styles.td}
            id={6.6}
          >
            6
          </td>
          <td
            onClick={() => {
              ammuttuKohta("5.6");
            }}
            className={styles.td}
            id={6.7}
          >
            7
          </td>
          <td
            onClick={() => {
              ammuttuKohta("5.7");
            }}
            className={styles.td}
            id={6.8}
          >
            8
          </td>
          <td
            onClick={() => {
              ammuttuKohta("5.8");
            }}
            className={styles.td}
            id={6.9}
          >
            9
          </td>
          <td
            onClick={() => {
              ammuttuKohta("5.9");
            }}
            className={styles.td}
            id={6.1}
          >
            10
          </td>
        </tr>

        <tr className={styles.tr}>
          {" "}
          {/*rivi 7*/}
          <td
            onClick={() => {
              ammuttuKohta("6.0");
            }}
            className={styles.td}
            id={7.1}
          >
            1
          </td>{" "}
          {/*solu*/}
          <td
            onClick={() => {
              ammuttuKohta("6.1");
            }}
            className={styles.td}
            id={7.2}
          >
            2
          </td>
          <td
            onClick={() => {
              ammuttuKohta("6.2");
            }}
            className={styles.td}
            id={7.3}
          >
            3
          </td>
          <td
            onClick={() => {
              ammuttuKohta("6.3");
            }}
            className={styles.td}
            id={7.4}
          >
            {" "}
            4
          </td>
          <td
            onClick={() => {
              ammuttuKohta("6.4");
            }}
            className={styles.td}
            id={7.5}
          >
            5
          </td>
          <td
            onClick={() => {
              ammuttuKohta("6.5");
            }}
            className={styles.td}
            id={7.6}
          >
            6
          </td>
          <td
            onClick={() => {
              ammuttuKohta("6.6");
            }}
            className={styles.td}
            id={7.7}
          >
            7
          </td>
          <td
            onClick={() => {
              ammuttuKohta("6.7");
            }}
            className={styles.td}
            id={7.8}
          >
            8
          </td>
          <td
            onClick={() => {
              ammuttuKohta("6.8");
            }}
            className={styles.td}
            id={7.9}
          >
            9
          </td>
          <td
            onClick={() => {
              ammuttuKohta("6.9");
            }}
            className={styles.td}
            id={7.1}
          >
            10
          </td>
        </tr>

        <tr className={styles.tr}>
          {" "}
          {/*rivi 8*/}
          <td
            onClick={() => {
              ammuttuKohta("7.0");
            }}
            className={styles.td}
            id={8.1}
          >
            1
          </td>{" "}
          {/*solu*/}
          <td
            onClick={() => {
              ammuttuKohta("7.1");
            }}
            className={styles.td}
            id={8.2}
          >
            2
          </td>
          <td
            onClick={() => {
              ammuttuKohta("7.2");
            }}
            className={styles.td}
            id={8.3}
          >
            3
          </td>
          <td
            onClick={() => {
              ammuttuKohta("7.3");
            }}
            className={styles.td}
            id={8.4}
          >
            {" "}
            4
          </td>
          <td
            onClick={() => {
              ammuttuKohta("7.4");
            }}
            className={styles.td}
            id={8.5}
          >
            5
          </td>
          <td
            onClick={() => {
              ammuttuKohta("7.5");
            }}
            className={styles.td}
            id={8.6}
          >
            6
          </td>
          <td
            onClick={() => {
              ammuttuKohta("7.6");
            }}
            className={styles.td}
            id={8.7}
          >
            7
          </td>
          <td
            onClick={() => {
              ammuttuKohta("7.7");
            }}
            className={styles.td}
            id={8.8}
          >
            8
          </td>
          <td
            onClick={() => {
              ammuttuKohta("7.8");
            }}
            className={styles.td}
            id={8.9}
          >
            9
          </td>
          <td
            onClick={() => {
              ammuttuKohta("7.9");
            }}
            className={styles.td}
            id={8.1}
          >
            10
          </td>
        </tr>

        <tr className={styles.tr}>
          {" "}
          {/*rivi 9*/}
          <td
            onClick={() => {
              ammuttuKohta("8.0");
            }}
            className={styles.td}
            id={9.1}
          >
            1
          </td>{" "}
          {/*solu*/}
          <td
            onClick={() => {
              ammuttuKohta("8.1");
            }}
            className={styles.td}
            id={9.2}
          >
            2
          </td>
          <td
            onClick={() => {
              ammuttuKohta("8.2");
            }}
            className={styles.td}
            id={9.3}
          >
            3
          </td>
          <td
            onClick={() => {
              ammuttuKohta("8.3");
            }}
            className={styles.td}
            id={9.4}
          >
            {" "}
            4
          </td>
          <td
            onClick={() => {
              ammuttuKohta("8.4");
            }}
            className={styles.td}
            id={9.5}
          >
            5
          </td>
          <td
            onClick={() => {
              ammuttuKohta("8.5");
            }}
            className={styles.td}
            id={9.6}
          >
            6
          </td>
          <td
            onClick={() => {
              ammuttuKohta("8.6");
            }}
            className={styles.td}
            id={9.7}
          >
            7
          </td>
          <td
            onClick={() => {
              ammuttuKohta("8.7");
            }}
            className={styles.td}
            id={9.8}
          >
            8
          </td>
          <td
            onClick={() => {
              ammuttuKohta("8.8");
            }}
            className={styles.td}
            id={9.9}
          >
            9
          </td>
          <td
            onClick={() => {
              ammuttuKohta("8.9");
            }}
            className={styles.td}
            id={9.1}
          >
            10
          </td>
        </tr>

        <tr className={styles.tr}>
          {" "}
          {/*rivi 10*/}
          <td
            onClick={() => {
              ammuttuKohta("9.0");
            }}
            className={styles.td}
            id={10.1}
          >
            1
          </td>{" "}
          {/*solu*/}
          <td
            onClick={() => {
              ammuttuKohta("9.1");
            }}
            className={styles.td}
            id={10.2}
          >
            2
          </td>
          <td
            onClick={() => {
              ammuttuKohta("9.2");
            }}
            className={styles.td}
            id={10.3}
          >
            3
          </td>
          <td
            onClick={() => {
              ammuttuKohta("9.3");
            }}
            className={styles.td}
            id={10.4}
          >
            {" "}
            4
          </td>
          <td
            onClick={() => {
              ammuttuKohta("9.4");
            }}
            className={styles.td}
            id={10.5}
          >
            5
          </td>
          <td
            onClick={() => {
              ammuttuKohta("9.5");
            }}
            className={styles.td}
            id={10.6}
          >
            6
          </td>
          <td
            onClick={() => {
              ammuttuKohta("9.6");
            }}
            className={styles.td}
            id={10.7}
          >
            7
          </td>
          <td
            onClick={() => {
              ammuttuKohta("9.7");
            }}
            className={styles.td}
            id={10.8}
          >
            8
          </td>
          <td
            onClick={() => {
              ammuttuKohta("9.8");
            }}
            className={styles.td}
            id={10.9}
          >
            9
          </td>
          <td
            onClick={() => {
              ammuttuKohta("9.9");
            }}
            className={styles.td}
            id={10.1}
          >
            10
          </td>
        </tr>
      </table>
    </div>
  );
}
