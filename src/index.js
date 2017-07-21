import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';



const rootComponent = (
    <Provider>
        <App />
    </Provider>

);
ReactDOM.render(rootComponent, document.getElementById('root'));
registerServiceWorker();
