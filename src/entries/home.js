import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
import data from '../api.json';
// console.log('Hola mundo!' )
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const reducer = function(state, action) {
    switch (action.type) {
        case 'ADD_SONG':
            return [...state, action.payload];
        default:
            return state;
    }
}

const initialState = {
    data: {
        ...data
    }
}

const store = createStore(
  // reducer
  reducer,
  // pre-load state
  initialState,
  //enhancer 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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

