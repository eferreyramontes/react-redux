import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import data from '../api.json';
import normalizedData from '../schemas/index.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/data'

// console.log(normalizedData)
// console.log(data)
console.log(normalizedData.result.categories)

const initialState = {
    data: {
        // ...data,
        entities: normalizedData.entities,
        categories: normalizedData.result.categories
    },
    search:[]
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

function normalize(data) {

}

render(
    <Provider store={store}>
        <Home />
    </Provider>
    ,homeContainer);

