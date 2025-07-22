import React, { useState } from 'react';
import './Calendar.css';

function Calendar() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1));
  };

  const selectDate = (day) => {
    setSelectedDate(new Date(year, month, day));
  };

  const getDayClasses = (day) => {
    const thisDate = new Date(year, month, day);
    let classes = "day";

    if (selectedDate?.toDateString() === thisDate.toDateString()) {
      classes += " selected";
    }

    if (today.toDateString() === thisDate.toDateString()) {
      classes += " today";
    }

    return classes;
  };

  const renderDays = () => {
    const blanks = Array(startDay).fill(null);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return [...blanks, ...days].map((day, index) =>
      day ? (
        <div key={index} className={getDayClasses(day)} onClick={() => selectDate(day)}>
          {day}
        </div>
      ) : (
        <div key={index} className="day empty"></div>
      )
    );
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={prevMonth}>&lt;</button>
        <span>{currentDate.toLocaleString('default', { month: 'long' })} {year}</span>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="calendar-weekdays">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d, i) => (
          <div key={i} className="weekday">{d}</div>
        ))}
      </div>
      <div className="calendar-grid">
        {renderDays()}
      </div>
    </div>
  );
}

export default Calendar;
