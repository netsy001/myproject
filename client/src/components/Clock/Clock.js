import React from 'react'
import Clock from 'react-live-clock';
import '../Clock/Clock.css';
import {useReducer} from 'react-redux';
function Time() {
    return (
        <div>
            <Clock className="clock-position" format={'HH:mm:ss'} ticking={true} timezone={'Australia/Adelaide'} />
        </div>
    )
}
export default Time
