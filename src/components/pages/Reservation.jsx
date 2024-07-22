import React, { useState } from "react";
// import ConfirmedBooking from "./ConfirmedBooking";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";

export default function Reservation() {
  //  state variables for each form field
  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  // const [occasion, setOccasion] = useState("Date");
  // const [availableTimes, setAvailableTimes] = useState([]);
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  //  state variable for available booking times
  // const [availableTimes] = useState([
  //   "17:00",
  //   "18:00",
  //   "19:00",
  //   "20:00",
  //   "21:00",
  //   "22:00",
  // ]);

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
      <form className="max-w-md mx-auto">
        <div className="relative z-0 w-full mb-5 mt-10 group">
          <input
            type="email"
            className="floating_email"
            id="floating_email"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            className="floating_first_name"
            id="floating_first_name"
            placeholder=" "
            required
          />
          <label
            for="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_last_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="floating_phone"
              id="floating_phone"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number (123-456-7890)
            </label>
          </div>
        </div>
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Phone number (123-456-7890)
        </label>
        <div>
          <label htmlFor="occasion" class="sr-only">
            Occasion
          </label>
          <select
            id="occasion"
            className="block mb-5 py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option select>Select occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Date">Simple date</option>
          </select>
        </div>

        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DatePicker
                className="border border-gray-300 rounded-md px-3 py-2 mb-5  w-full"
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticTimePicker />
          </LocalizationProvider>
        </div>
        <label
          htmlFor="guests"
          className="text-sm text-gray-500 dark:text-gray-400 "
        >
          Number of guests
        </label>
        <div>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            onChange={(e) => setGuests(parseInt(e.target.value))}
          />
        </div>
        <div className="flex items-center justify-center mt-5">
          <button
            type="submit"
            className="mb-10 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <Link to="/confirm">Make Your reservation</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
