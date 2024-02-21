import React, { useState, useEffect } from "react";
import ConfirmedBooking from "./ConfirmedBooking";
import { Link } from "react-router-dom";

export default function Reservation() {
  //  state variables for each form field
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Date");
  // const [availableTimes, setAvailableTimes] = useState([]);

  //  state variable for available booking times
  const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  // useEffect(() => {
  //   const fetchAvailableTimes = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
  //       );
  //       const responseTime = await response.json();
  //       setAvailableTimes(responseTime.availableTimes);
  //     } catch (error) {
  //       console.error("Error fetching available times:", error);
  //     }
  //   };

  //   if (date) {
  //     fetchAvailableTimes();
  //   }
  // }, [date]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            // This sets up an event handler function that will be called whenever the input field's value changes.
            // When the user types something into the input field, this function will be triggered.
            // The e parameter represents the event object. e.target.value retrieves the new value entered by the user in the input field. setDate(e.target.value)
            //  is then called to update the date state variable with the new value entered by the user.
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {availableTimes.map((timeOption) => (
              <option key={timeOption} value={timeOption}>
                {timeOption}
              </option>
            ))}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
          />
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Date">Date</option>
          </select>
          <label id="comment">Add a comment</label>
          <textarea value="comment"></textarea>
          {/* <input type="submit" value="Make Your reservation" /> */}
          <button type="submit" className="btn-reservation">
            <Link to="/confirm">Make Your reservation</Link>
          </button>
        </form>
      </div>
    </div>
  );
}
