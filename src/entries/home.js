import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
import { Map as map} from 'immutable';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// function logger({getState, dispatch}){
//   // Método para dispatchear el siguiente middleware
//   return (next) => {
//     // Regrese la ejecución de 'next'
//     return (action) => {
//       console.log('vamos a enviar esta acción', action);
//       const value = next(action);

//       console.log('este es mi nuevo estado', getState().toJS());

//       return value;
//     }
//   }
// }

// Esto de arriba podría ser cambiado por:
// const logger = ({getState, dispatch}) => next => action => {
//       console.log('vamos a enviar esta acción', action);
//       const value = next(action);
//       console.log('este es mi nuevo estado', getState().toJS());
//       return value; 
// }

const store = createStore(
  // reducer
  reducer,
  // pre-load state
  map(),
  //enhancer 
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeWithDevTools (
    applyMiddleware(
      logger,
      thunk
    )
  )
)

console.log(store.getState());

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;

render(
    <Provider store={store}>
        <Home />
    </Provider>
    ,homeContainer);

