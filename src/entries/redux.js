import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit',handleSubmit);

function handleSubmit(event) {
    event. preventDefault();

    const data = new FormData($form);

    const title = data.get('title');

    console.log(title);
}

const initialState = [
    {
        "title":"despacito",
    },
    {
        "title":"One more thing"
    },
    {
        "title":"Echame la culpa"
    },
]

const store = createStore(
  // reducer
  (state) => state,
  // pre-load state
  initialState,
  //enhancer 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
