import { useState } from "react";
import Event from "./Event";

const Calendar = () => {
  const [events, setEvents]:any = useState({
    sunday: {
      "9 am": { e: "Breakfast", c: "yellow" },
      "10 am": { e: "Gym", c: "green" },
    },
    monday: {
      "9 am": { e: "Breakfast", c: "yellow" },
      "10 am": { e: "FPGA Course", c: "green" },
      "11 am": { e: "FPGA Course", c: "green" },
      "3 pm": {e: "Research Meeting", c: "magenta"},
    },
    // Continue similarly for the other days
    tuesday: {
        "9 am": { e: "Breakfast", c: "yellow" },
        "8 pm": {e: "Codepath Cyb102", c: "blue"},
        "9 pm": {e: "Codepath Cyb102", c: "blue"},
        "10 pm": {e: "Codepath Cyb102", c: "blue"},
        "1 pm": { e: "Research Time", c: "magenta" },
        "2 pm": { e: "Research Time", c: "magenta" },
        "3 pm": { e: "Research Time", c: "magenta" },
        "4 pm": { e: "Research Time", c: "magenta" },
    },
    wednesday: {
        "9 am": { e: "Breakfast", c: "yellow" },
        "10 am": { e: "FPGA Course", c: "green" },
        "11 am": { e: "FPGA Course", c: "green" },
    },
    thursday: {
        "9 am": { e: "Breakfast", c: "yellow" },
        "6 am": { e: "Codepath Web103", c: "blue" },
        "7 pm": { e: "Codepath Web103", c: "blue" },
        "8 pm": { e: "Codepath Web103", c: "blue" },
        "1 pm": { e: "Research Time", c: "magenta" },
        "2 pm": { e: "Research Time", c: "magenta" },
        "3 pm": { e: "Research Time", c: "magenta" },
        "4 pm": { e: "Research Time", c: "magenta" },
    },
    friday: {
        "9 am": { e: "Breakfast", c: "yellow" },
        "10 am": { e: "FPGA Course", c: "green" },
        "11 am": { e: "FPGA Course", c: "green" },
    },
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
    "6 pm",
    "7 pm",
    "8 pm",
    "9 pm",
    "10 pm",
    "11 pm"
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
                <td key={day} >
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