import {actionTypes} from './constants.js'
import * as helpers from './helpers.js'
import {initialState} from '../store/initialState.js'

/* Action creators */
export const setScheduleIds = () => {
    return {
        type: actionTypes.setScheduleIds
    }
}

export const setActiveMonth = (month) => {
    return {
        type: actionTypes.setActiveMonth,
        activeMonth: month
    }
}

export const getCurrentDateTime = () => {
    return {
        type: actionTypes.getCurrentDateTime
    }
}

export const initCalendar = () => {
    return {
        type: actionTypes.initCalendar
    }
}

export const createSchedules = (scheduleIds) => {
    return {
        type: actionTypes.createSchedules,
        ids: scheduleIds
    }
}
/* Reducers */
const ACTION_HANDLERS = {
    [actionTypes.setScheduleIds]: (state, action) => Object.assign({}, state, {scheduleIds: helpers.setScheduleIds(state, action)}),
    [actionTypes.setActiveMonth]: (state, action) => Object.assign({}, state, {activeMonth: helpers.setActiveMonth(state, action)}), 
    [actionTypes.getCurrentDateTime]: (state, action) => Object.assign({}, state, {currentDateTime: helpers.getCurrentDateTime(state, action)}),
    [actionTypes.initCalendar]: (state, action) => Object.assign({}, state, helpers.initCalendar(state, action)),
    [actionTypes.createSchedules]: (state, action) => {}
}

export const reducer = (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state
}