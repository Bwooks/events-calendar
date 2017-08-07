import moment from 'moment'

const getDaysInMonth = () => {
    return moment().daysInMonth();
}

export const setScheduleIds = () => {
    const daysInMonth = getDaysInMonth()
    let scheduleIds = new Array(daysInMonth).fill(0)
    let result = scheduleIds.map((scheduleId, index)=>{
        return index+1
    })
    return result
}

export const setActiveMonth = (month) => {
    const activeMonth = month || moment().format("MMMM")
    return activeMonth
}


export const getCurrentDateTime = () => {
    return moment().toString()
}

export const createSchedules = (state, action) => {
    const scheduleIds = setScheduleIds()
    const schedulesById = {}
    scheduleIds.forEach((id, index) => {
        schedulesById[id] = {
            events: []
        }
    })

    return schedulesById
}

export const initCalendar = () => {
    return {
        scheduleIds: setScheduleIds(),
        activeMonth: setActiveMonth(moment().format("MMMM")),
        currentDateTime: getCurrentDateTime()
    }
}