import React, {Component} from 'react'
import Schedule from '../Schedule'
import moment from 'moment'

import c from 'classnames'

class Calendar extends Component {
    componentWillMount() {
        this.props.createSchedules(this.props.scheduleIds)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                Test
            </div>
        )
    }
}

export default Calendar