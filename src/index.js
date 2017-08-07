import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from 'react-redux'
import {configureStore} from './store/configureStore.js'
import {initialState} from './store/initialState.js'
import reducers from './store/rootReducer.js'
import Calendar from './components/Calendar'
import {initCalendar} from './models/Calendar'
import moment from 'moment'

const store = configureStore(reducers, initialState)
store.dispatch(initCalendar())
const rootComponent = (
    <Provider store={store}>
        <Calendar />
    </Provider>
)
ReactDOM.render(rootComponent, document.getElementById('root'))
registerServiceWorker()
