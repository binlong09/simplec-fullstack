import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
moment.locale('en-GB');

const events = [
	{
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
  },
]

const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

export class Calendar extends Component {
	render() {
		return (
			// <div className = 'component-calendar_wrapper'>
			// 	<h1 style = {{color: 'red'}}>This is a calewecwccccccccccccccccccccccccccccccccccccccccccccccccccccccndar</h1>
			// </div>
			<div style={{ height: "100%" }}>
				<BigCalendar
				events={events}
				views={allViews}
				step={60}
				showMultiDayTimes
				// max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
				defaultDate={new Date(2015, 3, 1)}
				localizer={localizer}
			/>
		</div>
		)
	}
}

export default Calendar;