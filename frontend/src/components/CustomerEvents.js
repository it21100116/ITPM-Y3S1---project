import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { format } from 'date-fns';
import axios from 'axios';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Header from './Header.js';

const localizer = momentLocalizer(moment);

function EventsCalendar() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const response = await axios.get('http://localhost:8070/event');
      setEvents(
        response.data.map((event) => ({
          ...event,
          start: new Date(event.date),
          end: new Date(event.date),
          title: event.name,
        })),
      );
    }
    fetchEvents();
  }, []);

  useEffect(() => {
    setFilteredEvents(
      events.filter((event) =>
        event.name.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, [search, events]);

  return (
    <div>
    <Header/>
    <br></br>
<div className="container" style={{ maxWidth: '90%' }}>      <div className="row">
        <div className="col-md-8">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 550 }}
          />
        </div>
        <div className="col-md-4">
          <h3>Search Events</h3>
          <input
            type="text"
            placeholder="Search events by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control mb-3"
          />
          <ul className="list-group">
            {filteredEvents.map((event) => (
              <li key={event._id} className="list-group-item">
                <strong>{event.name}</strong>
                <br />
                {format(new Date(event.date), 'MMM d, yyyy')}
                <br />
                {event.description}
                <br />
                {event.place}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default EventsCalendar;
//showing calender and event description
