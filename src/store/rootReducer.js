import {actionTypes} from '../models/constants.js'
import {  schedules } from '../models/Calendar.js'
import {  scheduleIds } from '../models/Calendar.js'
import { activeMonth } from '../models/Calendar.js'
import {  currentDateTime } from '../models/Calendar.js'
import {combineReducers} from 'redux'

export default combineReducers({
    schedules,
    scheduleIds, 
    activeMonth,
    currentDateTime
})