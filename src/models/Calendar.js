import {actionTypes} from './constants.js'
import * as helpers from './helpers.js'
import {initialState} from '../store/initialState.js'

/* constants */

const calendarInitState = {
    scheduleIds: [],
    activeMonth: "",
    currentDateTime: ""
};

/* Action creators */
export const setScheduleIds = () => {
    return {
        type: actionTypes.setScheduleIds
    }
};

export const setActiveMonth = (month) => {
    return {
        type: actionTypes.setActiveMonth,
        activeMonth: month
    }
};

export const getCurrentDateTime = () => {
    return {
        type: actionTypes.getCurrentDateTime
    }
};

export const initCalendar = () => {
    return {
        type: actionTypes.initCalendar
    }
};

export const createSchedules = (scheduleIds) => {
    return {
        type: actionTypes.createSchedules,
        ids: scheduleIds
    }
};
/* Reducers */

export const scheduleIds = (state = [], action) => {
    switch(action.type) {
        case actionTypes.setScheduleIds:
            return Object.assign({}, state, { scheduleIds: helpers.setScheduleIds(state, action) })
        default:
            return state
    }
};

export const activeMonth = (state = "", action) => {
    switch(action.type) {
        case actionTypes.setActiveMonth:
            return helpers.setActiveMonth(state, action)
        default:
            return state
    }
};

export const currentDateTime = (state = "", action) => {
    switch(action.type) {
        case actionTypes.getCurrentDateTime:
            return helpers.getCurrentDateTime(state, action)
        default:
            return state
    }
};

export const schedules = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.setScheduleIds:
            return Object.assign({}, state, helpers.createSchedules(state, action) )
        default:
            return state

    }
};

export const calendar = (state = calendarInitState, action) => {
    switch(action.type) {
        case actionTypes.initCalendar:
            console.log('here')

            return Object.assign({}, state, helpers.initCalendar(state, action))
        default:
            return state
    }
};

/*
const ACTION_HANDLERS = {
    [actionTypes.setScheduleIds]: (state = [], action) => Object.assign({}, state, { scheduleIds: helpers.setScheduleIds(state, action) }),
    [actionTypes.setActiveMonth]: (state = "", action) => Object.assign({}, state, { activeMonth: helpers.setActiveMonth(state, action)}),
    [actionTypes.getCurrentDateTime]: (state = "", action) => Object.assign({}, state, {currentDateTime: helpers.getCurrentDateTime(state, action)}),
    [actionTypes.initCalendar]: (state = , action) => Object.assign({}, state, { ...helpers.initCalendar(state, action)}),
    [actionTypes.createSchedules]: (state, action) => Object.assign({}, state, {schedules: helpers.createSchedules(state, action)} )
};


export const reducer = (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state
}
*/