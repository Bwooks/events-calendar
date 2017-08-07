import {actionTypes} from '../models/constants.js'
import { reducer as schedules } from '../models/Calendar.js'
import { reducer as scheduleIds } from '../models/Calendar.js'
import { reducer as activeMonth } from '../models/Calendar.js'
import { reducer as currentDateTime } from '../models/Calendar.js'
import {combineReducers} from 'redux'

export default combineReducers({
    schedules,
    scheduleIds, 
    activeMonth,
    currentDateTime
})