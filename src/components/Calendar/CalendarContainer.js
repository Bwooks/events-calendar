import Calendar from './Calendar'
import {connect} from 'react-redux'
import {initSchedules} from '../../models/Calendar'
import {actionTypes} from '../../models/constants.js' 
import {setScheduleIds, setActiveMonth, getCurrentDateTime, createSchedules, initCalendar} from '../../models/Calendar.js'

const mapStateToProps = (state) => {
    return {
        currentDateTime: state.currentDateTime,
        schedules: state.schedules,
        scheduleIds: state.scheduleIds, 
        activeMonth: state.activeMonth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       setScheduleIds: () => dispatch(setScheduleIds()),
       setActiveMonth: (month)=> dispatch(setActiveMonth(month)), 
       getCurrentDateTime: () => dispatch(getCurrentDateTime()),
       createSchedules: (scheduleIds) => dispatch(createSchedules(scheduleIds)),
        initCalendar: () => dispatch(initCalendar())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Calendar)