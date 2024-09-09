import { useState } from "react";
import Event from "./Event";

const Calendar = () => {
  const [events, setEvents]:any = useState({
    sunday: {
      "8 am": { e: "Breakfast", c: "orange" },
      "10 am": { e: "Gym", c: "green" },
    },
    monday: {
      "9 am": { e: "Meeting", c: "blue" },
      "12 pm": { e: "Lunch", c: "red" },
    },
    // Continue similarly for the other days
    tuesday: {},
    wednesday: {},
    thursday: {},
    friday: {},
    saturday: {},
  });

  const timeSlots = [
    "8 am",
    "9 am",
    "10 am",
    "11 am",
    "12 pm",
    "1 pm",
    "2 pm",
    "3 pm",
    "4 pm",
    "5 pm",
  ];

  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="time-header"></th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time) => (
            <tr key={time}>
              <td className="time">{time}</td>
              {days.map((day) => (
                <td key={day}>
                  {events[day][time] ? (
                    <Event event={events[day][time].e} color={events[day][time].c} />
                  ) : (
                    <Event />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;