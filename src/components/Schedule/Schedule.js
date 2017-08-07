import React, {Component} from 'react'
import c from 'classnames'
import {connect} from 'react-redux'
class Schedule extends Component {
    render() {
        return (
            <div className="schedule">
                Yo
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}



export default connect(mapStateToProps,null)(Schedule)