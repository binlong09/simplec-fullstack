import React, { Component } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import moment from 'moment'
import { getEvents } from '../../actions/eventActions'
import { connect } from 'react-redux';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import "react-big-calendar/lib/css/react-big-calendar.css";


const DragAndDropCalendar = withDragAndDrop(BigCalendar)

const events = [
	{
		start: new Date(),
		end: new Date(moment().add(0, "days")),
		title: "Some title",
		allDay: true
  },
  {
		start: new Date(moment().add(1, "days")),
		end: new Date(moment().add(1, "days")),
		title: "Some title 2",
		allDay: true
  },
]

const formatName = (name, count) => `${name} ID ${count}`


export class MyCalendar extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
      events: events,
      draggedEvent: null,
      counters: {
        item1: 0,
        item2: 0,
      },
    }
	}

	handleDragStart = name => {
    this.setState({ draggedEvent: name })
  }

  customOnDragOver = event => {
    // check for undroppable is specific to this example
    // and not part of API. This just demonstrates that
    // onDragOver can optionally be passed to conditionally
    // allow draggable items to be dropped on cal, based on
    // whether event.preventDefault is called
    if (this.state.draggedEvent !== 'undroppable') {
      console.log('preventDefault')
      event.preventDefault()
    }
  }

  onDropFromOutside = ({ start, end, allDay }) => {
    const { draggedEvent, counters } = this.state
    const event = {
      title: formatName(draggedEvent, counters[draggedEvent]),
      start,
      end,
      isAllDay: allDay,
    }
    const updatedCounters = {
      ...counters,
      [draggedEvent]: counters[draggedEvent] + 1,
    }
    this.setState({ draggedEvent: null, counters: updatedCounters })
    this.newEvent(event)
  }

  moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
    const { events } = this.state

    const idx = events.indexOf(event)
    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const updatedEvent = { ...event, start, end, allDay }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents,
    })

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

    //alert(`${event.title} was resized to ${start}-${end}`)
  }

  newEvent(event) {
    let idList = this.state.events.map(a => a.id)
    let newId = Math.max(...idList) + 1
    let hour = {
      id: newId,
      title: event.title,
      allDay: event.isAllDay,
      start: event.start,
      end: event.end,
    }
    this.setState({
      events: this.state.events.concat([hour]),
    })
  }

	render() {
		const localizer = momentLocalizer(moment)

    return(
			<div>
				<DragAndDropCalendar
          selectable
          localizer={localizer}
          events={events}
          // onEventDrop={this.moveEvent}
          // onDropFromOutside={this.onDropFromOutside}
          // onDragOver={this.customOnDragOver}
          resizable
          onEventResize={this.resizeEvent}
          onSelectSlot={this.newEvent}
          // onD
          defaultView="month"
					defaultDate={new Date()}
					style={{ height: "100vh" }}
        />
			</div>
			// <div></div>
		);
  }
}

// const mapStateToProps = state => ({
// 	events: state.events
// })

// export default connect(mapStateToProps, { getEvents })(Calendar)

export default MyCalendar