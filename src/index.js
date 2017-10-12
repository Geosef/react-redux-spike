import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import './index.css';
import Game from './game'

const store = createStore(reducer);

render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);

