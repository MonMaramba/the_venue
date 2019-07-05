import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

export default class Countdown extends Component {

    state = {
        deadline: 'Dec, 15, 2019',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    }

    getTimeUntil() {
        const time = Date.parse(this.state.deadline) - Date.parse(new Date());
        if (time < 0) {
            console.log('Date has passed')
        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));

            this.setState({
                days,
                hours,
                minutes,
                seconds
            })
        }
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(), 1000)
    }

    render() {
        return (
            <Slide left duration={1000} delay={500}>
                <div className='countdown_wrapper'>
                    <div className='countdown_top'>Event starts in</div>
                    <div className='countdown_bottom'>
                        <div className='countdown_item'>
                            <div className='countdown_time'>{this.state.days}</div>
                            <div className='countdown_tag'>Days</div>
                        </div>
                        <div className='countdown_item'>
                            <div className='countdown_time'>{this.state.hours}</div>
                            <div className='countdown_tag'>hrs</div>
                        </div>
                        <div className='countdown_item'>
                            <div className='countdown_time'>{this.state.minutes}</div>
                            <div className='countdown_tag'>mins</div>
                        </div>
                        <div className='countdown_item'>
                            <div className='countdown_time'>{this.state.seconds}</div>
                            <div className='countdown_tag'>secs</div>
                        </div>
                    </div>
                </div>
            </Slide>

        )
    }
}
