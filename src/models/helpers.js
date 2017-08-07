import moment from 'moment'

const getDaysInMonth = () => {
    return moment().daysInMonth();
}

export const setScheduleIds = () => {
    const daysInMonth = getDaysInMonth()
    let scheduleIds = new Array(daysInMonth).fill()
    let result = scheduleIds.map((scheduleId, index)=>{
        return index+1
    })
    return result
}

export const setActiveMonth = (month) => {
    const activeMonth = month || "January"
    return activeMonth
}


export const getCurrentDateTime = () => {
    return moment().toString()
}

export const createSchedules = (state, action) => {
    let schedules = {}

    return schedules
}

export const initCalendar = () => {
    return {
        scheduleIds: setScheduleIds(),
        activeMonth: setActiveMonth(moment().format("MMMM")),
        currentDateTime: getCurrentDateTime()
    }
}