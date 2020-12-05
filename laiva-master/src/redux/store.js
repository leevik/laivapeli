import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);
export default store;

//Testattu näillä index.jsssä.
// const coordinates = [
//     [1, 1],
//     [1, 2],
//     [1, 3],
//     [1, 4],
//     [1, 5],
//   ];

//   const x = coordinates[1].slice(0, 1);
//   const y = coordinates[1].slice(1, 2);

//   console.log(coordinates[1][0]);
//   console.log("Tässä x: [" + x + "] Tässä y: [" + y + "]");

//   store.dispatch(placeShip(coordinates, 1));
//   store.dispatch(toggleTurn());
//   store.dispatch(gameOver());

//   unsubscribe();
