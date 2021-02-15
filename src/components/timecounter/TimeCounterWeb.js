import React, { Component } from 'react'
import Countdown from 'react-countdown';
import './timecounterweb.css';

export default class TimeCounterWeb extends Component {
    render() {

        // Random component
        const Completionist = () => <span className="time-ccsnst-end-txxt">Offer is End!</span>
        
        // Renderer callback with condition
        const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span> <span className="flash-deat-time-coint-end-in-txt">End in</span> <span className="time-countt-dayssx-webb">{days}d</span> :  <span className="time-countt-dayssx-webb">{hours}h</span> : <span className="time-countt-dayssx-webb">{minutes}m</span> : <span className="time-countt-dayssx-webb">{seconds}s</span></span>;
            // return <span>{days}<span className="time-ccnxt-timmx">D</span>:{hours}<span className="time-ccnxt-timmx">H</span>:{minutes}<span className="time-ccnxt-timmx">M</span>:{seconds}<span className="time-ccnxt-timmx">S</span></span>;
        }
        };

        return (
            <div>
                <Countdown
                    date={Date.now() + 500000000}
                    renderer={renderer}
                />
            </div>
        )
    }
}